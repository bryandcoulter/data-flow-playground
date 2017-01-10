if(!LocalStorage.check('USERS')) {
  LocalStorage.save('USERS', { users: [
    {userId: '1', name: 'Bryan', email: 'bryan@yoursite.com'},
    {userId: '2', name: 'John', email: 'john@yoursite.com'},
    {userId: '3', name: 'Chad', email: 'Chad@yoursite.com'}
  ]});
}
if(!LocalStorage.check('ACCOUNT')) {
  LocalStorage.save('ACCOUNT', {membershipId: '123456789', locationId: '0001-0001-0001-0001', locationName: 'Your Facility' });
}
