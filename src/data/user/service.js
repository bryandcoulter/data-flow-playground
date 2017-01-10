class UserService {
  static updateUser(user) {
    const newLocalArray = LocalStorage.load('USERS').users.map((_user) => {
      if(user.userId === _user.userId) {
        return user;
      } else {
        return _user;
      }
    });
    LocalStorage.save('USERS', {users: newLocalArray})    
  }
}
