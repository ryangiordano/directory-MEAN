var User = require('../models/user');
var Employee = require('../models/employee');
var bcrypt = require('bcryptjs')
module.exports = function(app){
  app.get('/api/setupEmployees', function(req,res){
    //seed the database
    var starterEmployees = [
      {
        firstName: 'Brandon',
        lastName: 'Bass',
        email: 'brandon@gmail.com',
        title: 'job',
        phone: '555-555-5555',
        branch: 'Louisville',
        picture: 'http://www.blg.com/en/OurPeople/PublishingImages/w/Pratte-Guy.jpg'
      },
      {
        firstName: 'Ryan',
        lastName: 'Giordano',
        email: 'ryan@gmail.com',
        title: 'job',
        phone: '555-555-5555',
        branch: 'Louisville',
        picture: 'http://www.blg.com/en/OurPeople/PublishingImages/w/Pratte-Guy.jpg'
      },
      {
        firstName: 'Shellee',
        lastName: 'Jones',
        email: 'shellee@gmail.com',
        title: 'job',
        phone: '555-555-5555',
        branch: 'Louisville',
        picture: 'http://www.partoflifephotography.com/wp-content/uploads/2015/09/OL_0003_w002-1024x751.jpg'
      },
      {
        firstName: 'Anthony',
        lastName: 'Quisenberry',
        email: 'aq@gmail.com',
        title: 'job',
        phone: '555-555-5555',
        branch: 'Louisville',
        picture: 'http://www.blg.com/en/OurPeople/PublishingImages/w/Pratte-Guy.jpg'
      },
      {
        firstName: 'Alex',
        lastName: 'Artundaga',
        email: 'apa@gmail.com',
        title: 'job',
        phone: '555-555-5555',
        branch: 'Louisville',
        picture: 'http://www.blg.com/en/OurPeople/PublishingImages/w/Pratte-Guy.jpg'
      },
      {
        firstName: 'Jason',
        lastName: 'Kretzer',
        email: 'jk@gmail.com',
        title: 'job',
        phone: '555-555-5555',
        branch: 'Louisville',
        picture: 'http://www.blg.com/en/OurPeople/PublishingImages/w/Pratte-Guy.jpg'
      },
      {
        firstName: 'Jordan',
        lastName: 'Todd',
        email: 'jordan@gmail.com',
        title: 'job',
        phone: '555-555-5555',
        branch: 'Louisville',
        picture: 'http://www.blg.com/en/OurPeople/PublishingImages/w/Pratte-Guy.jpg'
      },
      {
        firstName: 'Krystal',
        lastName: 'Surrat',
        email: 'krystal@gmail.com',
        title: 'job',
        phone: '555-555-5555',
        branch: 'Louisville',
        picture: 'http://www.partoflifephotography.com/wp-content/uploads/2015/09/OL_0003_w002-1024x751.jpg'
      }
    ];
    Employee.create(starterEmployees, function(err,results){
      res.send(results);
    });
  });
  app.get('/api/setupUsers', function(req,res){
    //seed the database
    var starterUsers = [
      {
        firstName:'Ryan',
        lastName:'Giordano',
        email: 'rgiorda1@gmail.com',
        password: bcrypt.hashSync('test123',10)
      }
    ];
    User.create(starterUsers, function(err,results){
      res.send(results);
    });
  });
}
