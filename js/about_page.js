var email= ('codefellowsproject@gmail.com');

var subject = ('User Feedback');

var body = ('Leave your comments here!');

$("#emailTo").append('<a id="email-link" href="mailto:' + email +

'?subject=' +subject+

'&body=' +body+

'">' + 'Contact the Team!' + '<'+'/a>');
