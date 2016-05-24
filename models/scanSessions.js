var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//scan session schema
var SessionIDSchema = new Schema({
	"SessionID": String,
	"ParticipantAge": {
		type: Number, 
		min: 0,
		max: 100
	},

	"MEGScans": {
		"ScanName": String,
		"ScanDate": Date
	},

	"MRIScans": {
		"ScanName": String,
		"ScanDate": Date
	},

	"TestResults":{
		"IQScore": Number,
		"ADHDScale": Number
	}

});

//list of all subject sessions
var ScanSessionsSchema = new Schema({
	"SubjectID": {type: String, unique: true, ref: 'Subject'},
	"SubjectIDinProject": {type: String, unique: true, ref:'Project'},
	"ScanSessions": [SessionIDSchema],
});

var ScanSession = module.exports = mongoose.model('scanSession', ScanSessionsSchema, 'scanSessions');

//get all sessions
module.exports.getScanSessions = function(callback, limit){
	ScanSession.find(callback).limit(limit);
}

//get one session by subject ID in project
module.exports.getScanSessionBySubjectIDinProject = function(id,callback){
	ScanSession.findOne({SubjectIDinProject: id}, callback);
	//Project.find(callback).select({"Project Name": name});
}

//get one session by subject ID
module.exports.getScanSessionBySubjectID = function(id,callback){
	ScanSession.findOne({SubjectID: id}, callback);
	//Project.find(callback).select({"Project Name": name});
}