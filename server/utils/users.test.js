const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Gab',
      room: 'Gab Fans'
    }, {
      id: '2',
      name: 'DeGea',
      room: 'DeGea Fans'
    }, {
      id: '3',
      name: 'David',
      room: 'Gab Fans'
    }];
  });

  it('should add users', () => {
    var users = new Users();
    var user = {
      id: 123,
      name: 'Naldo',
      room: 'CR7 Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var userId = '66';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '77';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names for gab fans', () => {
    var userList = users.getUserList('Gab Fans');

    expect(userList).toEqual(['Gab', 'David']);
  });

  it('should return names for degea fans', () => {
    var userList = users.getUserList('DeGea Fans');

    expect(userList).toEqual(['DeGea']);
  });
});
