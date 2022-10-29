package simpledb

import (
	"errors"
)

type DB struct {
	Transaction []map[string]interface{}
}

func NewDB() *DB {
	curr := make(map[string]interface{})
	newDB := make([]map[string]interface{}, 0)
	newDB = append(newDB, curr)
	return &DB{
		Transaction: newDB,
	}
}

func (db *DB) getLast() map[string]interface{} {
	itemCount := len(db.Transaction)
	return db.Transaction[itemCount-1]
}

// Set sets a key value pair in db
func (db *DB) Set(key string, val interface{}) {
	curr := db.getLast()
	curr[key] = val
}

// Get gets value associated with key, returns nil otherwise
func (db *DB) Get(key string) (interface{}, error) {
	curr := db.getLast()
	v, ok := curr[key]
	if !ok {
		return nil, errors.New("key does not exist in db")
	}
	return v, nil
}

// Unset unsets a key from db
func (db *DB) Unset(key string) error {
	curr := db.getLast()
	_, ok := curr[key]
	if !ok {
		return errors.New("key does not exist in db")
	}
	delete(curr, key)
	return nil
}

// Begin begins a transaction
func (db *DB) Begin() {
	// in a tx block, we need to actually make a copy of the map
	// into a new map object or else we will modify all instances of the map
	// because maps are inherently reference objects
	curr := db.getLast()
	txCopy := make(map[string]interface{})
	for k, v := range curr {
		txCopy[k] = v
	}
	db.Transaction = append(db.Transaction, txCopy)
}

// Commit commits a transaction
// need to introduce error handling
func (db *DB) Commit() error {
	if len(db.Transaction) < 2 {
		return errors.New("there is nothing to commit")
	}
	curr := db.getLast()
	newComm := make([]map[string]interface{}, 0)
	newComm = append(newComm, curr)
	db.Transaction = newComm
	return nil
}

// Rollback rolls back a transaction
// need to introduce error handling
func (db *DB) Rollback() error {
	if len(db.Transaction) < 2 {
		return errors.New("there is nothing to commit")
	}
	itemCount := len(db.Transaction)
	db.Transaction = db.Transaction[:itemCount-1]
	return nil
}
