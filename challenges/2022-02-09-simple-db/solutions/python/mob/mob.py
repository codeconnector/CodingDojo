class SimpleDB:
    """ SimpleDB uses in memory python dictionary treating it as a database
    for common methods: GET, SET, UNSET, BEGIN, COMMIT, ROLLBACK
    """
    def __init__(self):
        self.db = [dict()]


    def set(self, key, value):
        """set sets the value associated with the key"""
        current = self.db[-1]
        current[key] = value


    def get(self, key):
        """
        get returns the value associated with the key
        get should raise a KeyError if the key doesn't exist
        """
        current = self.db[-1]
        if not key in current: 
            raise KeyError(f"{key} not in database")

        return current[key]


    def unset(self, key):
        """unset should delete the key from the db"""
        current = self.db[-1]
        if not key in current: 
            raise KeyError(f"{key} not in database")

        del current[key]


    def begin(self):
        """begin starts a new transaction"""
        current = self.db[-1]
        copy    = dict(current)
        self.db.append(copy)


    def commit(self):
        """
        commit commits all transactions
        it should raise an Exception if there is no ongoing transaction
        """
        if len(self.db) < 2:
            raise Exception("Play stupid games, win stupid prizes.")

        self.db = [self.db[-1]]


    def rollback(self):
        """
        rollback undoes the most recent transaction
        it should raise an Exception if there is no ongoing transation
        """
        if len(self.db) < 2:
            raise Exception("Play stupid games, win stupid prizes.")
        self.db.pop() # Let it go

