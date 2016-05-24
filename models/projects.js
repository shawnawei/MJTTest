var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//project schema
var projectSchema = new Schema({

	"ProjectID": {type: String, unique: true},
	"ProjectName": String,
	//"SubjectsID":String
	"SubjectsID":[{type:String, ref:'scanSessions'}]
});

var Project = module.exports = mongoose.model('Project', projectSchema, 'projectsList');

//get all projects
module.exports.getProjects = function(callback, limit){
	Project.find(callback).limit(limit);
}

//get one project
module.exports.getProjectById = function(id,callback){
	Project.findOne({ProjectID: id}, callback);
	//Project.find(callback).select({"Project Name": name});
}

//add a project
module.exports.addProject = function(project, callback){
	Project.create(project, callback);
}

//update a project
module.exports.updateProject = function(id, project, options, callback){
	var query = {_id:id};
	var update = {
		"ProjectID": project['ProjectID'],
		"ProjectName": project['ProjectName'],
		"SubjectsID": project['SubjectsID']
	}
	Project.findOneAndUpdate(query, update, options, callback);
}

//delete a project
module.exports.deleteProject = function(id, callback){
	var query = {_id:id};
	Project.remove(query, callback);
}