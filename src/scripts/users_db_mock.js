const usersKey = 'users';

function setStorageItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getStorageItem(key) {
    const data = localStorage.getItem(key);

    return JSON.parse(data);
}

const usersStorage = {
    init: function () {
        if (!Array.isArray(this.getAll())) {
            setStorageItem(usersKey, []);
        }
    },
    sort: function (sortColumn, sortDirection) {
        const users = this.getAll();
        const sortingKey = sortDirection === 'ASC' ? 1 : -1;

        users.sort(function (a, b) {
            if (a[sortColumn] > b[sortColumn]) {
                return sortingKey;
            }

            if (a[sortColumn] < b[sortColumn]) {
                return -1 * sortingKey;
            }

            return 0;
        });

        setStorageItem(usersKey, users);

        return users;
    },
    getAll: function () {
        return getStorageItem(usersKey);
    },
    find: function (id) {
        return this.getAll().find(user => user.id === id) || null;
    },
    add: function (user) {
        // @todo: validate user props
        const users = this.getAll();

        if (users.length) {
            const lastUser = users[users.length - 1];
            user.id = lastUser.id + 1;
        } else {
            user.id = 1;
        }

        users.push(user);
        setStorageItem(usersKey, users);

        return user;
    },
    update: function (id, data) {
        const users = this.getAll();
        let updatedUser = null;

        for (const user of users) {
            if (user.id === id) {
                if (user.password !== data.oldPassword) {
                    throw new Error('Old password is wrong!');
                }

                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.email = data.email;
                user.phone = data.phone;
                user.password = data.password;

                updatedUser = user;
            }
        }

        if (!updatedUser) {
            throw new Error('User not found.');
        }

        setStorageItem(usersKey, users);

        return updatedUser;
    },
    delete: function (id) {
        let users = this.getAll();
        users = users.filter(user => user.id !== id);
        setStorageItem(usersKey, users);
    },
};
