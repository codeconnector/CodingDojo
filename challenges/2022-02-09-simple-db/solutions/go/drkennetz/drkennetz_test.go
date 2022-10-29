package simpledb

import (
	"github.com/stretchr/testify/require"
	"testing"
)

func TestDB_EmptyUnset(t *testing.T) {
	db := NewDB()
	require.Error(t, db.Unset("a"))
}

func TestDB_Unset(t *testing.T) {
	// Tests the set
	db := NewDB()
	db.Set("a", 10)
	v, err := db.Get("a")
	require.Equal(t, v, 10)
	require.NoError(t, err)
	// Tests the unset
	db.Unset("a")
	v, err = db.Get("a")
	require.Error(t, err)
}

func TestDB_Rollback(t *testing.T) {
	db := NewDB()

	db.Begin()
	db.Set("a", 10)
	v, err := db.Get("a")
	require.Equal(t, v, 10)
	require.NoError(t, err)

	db.Begin()
	db.Set("a", 20)
	v, err = db.Get("a")
	require.Equal(t, v, 20)
	require.NoError(t, err)

	db.Rollback()
	require.NoError(t, err)
	v, err = db.Get("a")
	require.Equal(t, v, 10)
	require.NoError(t, err)

	db.Rollback()
	_, err = db.Get("a")
	require.Error(t, err)
}

func TestDB_NestedCommit(t *testing.T) {
	db := NewDB()
	db.Begin()
	db.Set("a", 30)
	db.Begin()
	db.Set("a", 40)
	db.Commit()
	v, err := db.Get("a")
	require.Equal(t, v, 40)
	require.NoError(t, err)

	require.Error(t, db.Rollback())
	require.Error(t, db.Commit())
}

func TestDB_TransactionInterleavedKeys(t *testing.T) {
	db := NewDB()
	db.Set("a", 10)
	db.Set("b", 10)
	va, _ := db.Get("a")
	vb, _ := db.Get("b")
	require.Equal(t, va, 10)
	require.Equal(t, vb, 10)
	db.Begin()
	db.Set("a", 20)
	va, _ = db.Get("a")
	vb, _ = db.Get("b")
	require.Equal(t, va, 20)
	require.Equal(t, vb, 10)
	db.Begin()
	db.Set("b", 30)
	va, _ = db.Get("a")
	vb, _ = db.Get("b")
	require.Equal(t, va, 20)
	require.Equal(t, vb, 30)
}

func TestDB_TransactionRollbackUnset(t *testing.T) {
	db := NewDB()

	db.Set("a", 10)
	v, _ := db.Get("a")
	require.Equal(t, v, 10)

	db.Begin()
	// should be 2 a:10 entries
	v2, _ := db.Get("a")
	require.Equal(t, v2, 10)
	db.Set("a", 20)
	// should be 1 a:10 and 1 a:20
	v3, _ := db.Get("a")
	require.Equal(t, v3, 20)

	db.Begin()
	db.Unset("a")
	_, err := db.Get("a")
	require.Error(t, err)

	db.Rollback()
	v4, _ := db.Get("a")
	require.Equal(t, v4, 20)

	db.Commit()
	v5, _ := db.Get("a")
	require.Equal(t, v5, 20)
}

func TestDB_TransactionCommitUnset(t *testing.T) {
	db := NewDB()
	db.Set("a", 10)
	v, _ := db.Get("a")
	require.Equal(t, v, 10)

	db.Begin()
	v2, _ := db.Get("a")
	require.Equal(t, v2, 10)
	db.Unset("a")
	_, err := db.Get("a")
	require.Error(t, err)

	db.Rollback()
	v3, _ := db.Get("a")
	require.Equal(t, v3, 10)

	db.Begin()
	db.Unset("a")
	_, err = db.Get("a")
	require.Error(t, err)

	// should be empty
	db.Commit()
	_, err = db.Get("a")
	require.Error(t, err)

	db.Begin()
	_, err = db.Get("a")
	require.Error(t, err)
	db.Set("a", 20)
	v4, _ := db.Get("a")
	require.Equal(t, v4, 20)

	db.Commit()
	v5, _ := db.Get("a")
	require.Equal(t, v5, 20)
}
