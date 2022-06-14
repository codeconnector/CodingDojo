import unittest

class SimpleDB:
    """ SimpleDB uses in memory python dictionary treating it as a database
    for common methods: GET, SET, UNSET, BEGIN, COMMIT, ROLLBACK
    """
    def __init__(self):
        pass


    def set(self, key, value):
        """set sets the value associated with the key"""
        pass


    def get(self, key):
        """
        get returns the value associated with the key
        get should raise a KeyError if the key doesn't exist
        """
        pass


    def unset(self, key):
        """unset should delete the key from the db"""
        pass


    def begin(self):
        """begin starts a new transaction"""
        pass


    def commit(self):
        """
        commit commits all transactions
        it should raise an Exception if there is no ongoing transaction
        """
        pass


    def rollback(self):
        """
        rollback undoes the most recent transaction
        it should raise an Exception if there is no ongoing transation
        """
        pass


class SimpleDBTest(unittest.TestCase):
    def test_unset(self):
        db = SimpleDB()

        db.set("a", 10)
        self.assertValue(db, "a", 10)

        db.unset("a")
        self.assertRaises(KeyError, db.get, "a")

    def testRollback(self):
        db = SimpleDB()

        db.begin()
        db.set("a", 10)
        self.assertValue(db, "a", 10)

        db.begin()
        db.set("a", 20)
        self.assertValue(db, "a", 20)

        db.rollback()
        self.assertValue(db, "a", 10)

        db.rollback()
        self.assertRaises(KeyError, db.get, "a")

    def testNestedCommit(self):
        db = SimpleDB()

        db.begin()
        db.set("a", 30)

        db.begin()
        db.set("a", 40)

        db.commit()
        self.assertValue(db, "a", 40)

        self.assertRaises(Exception, db.rollback)

        self.assertRaises(Exception, db.commit)

    def testTransactionInterleavedKeys(self):
        db = SimpleDB()

        db.set("a", 10)
        db.set("b", 10)
        self.assertValue(db, "a", 10)
        self.assertValue(db, "b", 10)

        db.begin()
        db.set("a", 20)
        self.assertValue(db, "a", 20)
        self.assertValue(db, "b", 10)

        db.begin()
        db.set("b", 30)
        self.assertValue(db, "a", 20)
        self.assertValue(db, "b", 30)

        db.rollback()
        self.assertValue(db, "a", 20)
        self.assertValue(db, "b", 10)

        db.rollback()
        self.assertValue(db, "a", 10)
        self.assertValue(db, "b", 10)

    def testTransactionRollbackUnset(self):
        db = SimpleDB()

        db.set("a", 10)
        self.assertValue(db, "a", 10)

        db.begin()
        self.assertValue(db, "a", 10)
        db.set("a", 20)
        self.assertValue(db, "a", 20)

        db.begin()
        db.unset("a")
        self.assertRaises(KeyError, db.get, "a")

        db.rollback()
        self.assertValue(db, "a", 20)

        db.commit()
        self.assertValue(db, "a", 20)

    def testTransactionCommitUnset(self):
        db = SimpleDB()

        db.set("a", 10)
        self.assertValue(db, "a", 10)

        db.begin()
        self.assertValue(db, "a", 10)
        db.unset("a")
        self.assertRaises(KeyError, db.get, "a")

        db.rollback()
        self.assertValue(db, "a", 10)

        db.begin()
        db.unset("a")
        self.assertRaises(KeyError, db.get, "a")

        db.commit()
        self.assertRaises(KeyError, db.get, "a")

        db.begin()
        self.assertRaises(KeyError, db.get, "a")
        db.set("a", 20)
        self.assertValue(db, "a", 20)

        db.commit()
        self.assertValue(db, "a", 20)

    def assertValue(self, db, key, value):
        actualValue = db.get(key)
        self.assertEqual(value, actualValue)


if __name__ == "__main__":
    unittest.main()

