var email= ('lmcnern@outlook.com');

var subject = ('User Feedback');

var body = ('Leave your comments here!');

$("#emailTo").append('<a href="mailto:' + email +

'?subject=' +subject+

'&body=' +body+

'">' + 'Contact the Team!' + '<'+'/a>');
