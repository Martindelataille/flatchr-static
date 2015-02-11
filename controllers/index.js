// This is the base controller. Used for base routes, such as the default index/root path, 404 error pages, and others.
module.exports = {
    index: {
        handler: function(request, reply){
            reply.view('index');
        }
    },
    signup: {
        handler: function(request, reply){
            reply.view('signup');
        }
    }
}
