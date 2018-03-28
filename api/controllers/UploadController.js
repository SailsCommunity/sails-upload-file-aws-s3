/**
 * UploadController
 *
 * @description :: Server-side logic for managing Uploads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


const S3_KEY = "YOUR_S3_KEY";
const S3_SECRET = "YOUR_S3_SECRET";
const S3_BUCKET = "YOUR_S3_BUCKET";

module.exports = {

	upload: function (req, res) {
   		req.file('avatar').upload({
      		adapter: require('skipper-s3'),
      		key: S3_KEY,
      		secret: 'S3_SECRET',
      		bucket: 'S3_BUCKET'
    		}, function (err, filesUploaded) {
	      		if (err) return res.negotiate(err);
      			return res.ok({
        			files: filesUploaded
      			});
    		});
  	}
	
};

