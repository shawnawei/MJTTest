var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var enumSex = ['Female', 'Male', 'Unknown'];
var enumHandedness = ['Left', 'Right'];
var shortid = require('short-mongo-id');

/*scan session schema
var scanSessionSchema = new Schema({
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

});*/

//list of projects that a subject is involved in Schema
var projectPerSubjectSchema = new Schema({
	"ProjectID": {type: String, unique: true, ref: 'Project'},
	"SubjectIDinProject": {type: String, unique: true},
	"ScanSessions": [{type: String, unique: true, ref: 'scanSession'}]
});

//subject schema
var subjectSchema = new Schema({

	ID: {type: String, required: true, unique: true},
	Sex: {type: String, enum: enumSex},
	Handedness: {type: String, enum: enumHandedness},
	Diagnosis: String,
	Other: String,
	Projects:[projectPerSubjectSchema]
});

var Subject = module.exports = mongoose.model('Subject', subjectSchema, 'subjectsList');

//get all subjects
module.exports.getSubjects = function(callback, limit){
	Subject.find(callback).limit(limit);
}

//get a subject
module.exports.getSubjectById = function(id, callback){
	Subject.findOne({ID:id}, callback);
}

/*
module.exports.getScanSessionByProjectID = function(id, callback){
	Subject.findOne(id, callback);
}*/

//add a subject
module.exports.addSubject = function(subject, callback){
	Subject.create(subject, callback);
}

//update a subject
module.exports.updateSubject = function(id, subject, options, callback){
	var query = {_id:id};
	var update = {
		ID: subject.ID,
		Sex: subject.Sex,
		Handedness: subject.Handedness,
		Diagnosis: subject.Diagnosis,
		Other: subject.Other,
		Projects: subject.Projects
	}
	Subject.findOneAndUpdate(query, update, options, callback);
}

//delete a subject
module.exports.deleteSubject = function(id, callback){
	var query = {_id:id};
	Subject.remove(query, callback);
}