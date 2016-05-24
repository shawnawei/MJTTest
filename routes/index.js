//var homePage = require('./views/HomePage');
var express = require('express');
var router = express.Router();
var subject = require('../models/subjects');
var project = require('../models/projects');
var scanSession = require('../models/scanSessions');
var bodyParser = require('body-parser');
//var subject = require('../test data/subjects');
var Projects = subject.Projects;

router.use(bodyParser.json());

router.get('/test', function(req, res) {
	res.render('./views/HomePage');
});

/*router.get('/searchPage', function(req, res) {
	res.render('./views/searchPage');
});
*/
router.get('/subjects', function(req, res) {
	
	subject.getSubjects(function(err, subjects){
		if (err){
			throw err;
		}
		res.json(subjects);
	});
});

router.get('/projects', function(req, res) {
	
	project.getProjects(function(err, projects){
		if (err){
			throw err;
		}
		res.json(projects);
	});
});

router.get('/subjects/:ID', function(req, res) {
	subject.getSubjectById(req.params.ID, function(err, subject){
		if (err){
			throw err;
		}
		res.json(subject);
	});

});

router.get('/projects/:ProjectID', function(req, res) {

	project.getProjectById(req.params.ProjectID, function(err, project){
		if (err){
			throw err;
		}
		res.json(project);
	});
});


router.get('/scanSession/:SubjectIDinProject', function(req, res) {

	scanSession.getScanSessionBySubjectIDinProject(req.params.SubjectIDinProject, function(err, scanSession){
		if (err){
			throw err;
		}
		res.json(scanSession);
	});
});



router.post('/subjects', function(req, res) {
	var _subject = req.body;
	subject.addSubject(_subject, function(err, subject){
		if (err){
			throw err;
		}
		res.json(subject);
	});
});


router.post('/projects', function(req, res) {
	var _project = req.body;
	project.addProject(_project, function(err, project){
		if (err){
			throw err;
		}
		res.json(project);
	});
});

router.put('/subjects/:_id', function(req, res) {
	var id = req.params._id;
	var _subject = req.body;
	subject.updateSubject(id, _subject, {}, function(err, subject){
		if (err){
			throw err;
		}
		res.json(subject);
	});
});

router.put('/projects/:_id', function(req, res) {
	var id = req.params._id;
	var _project = req.body;
	project.updateProject(id, _project, {}, function(err, project){
		if (err){
			throw err;
		}
		res.json(project);
	});
});


router.delete('/subjects/:_id', function(req, res) {
	var id = req.params._id;
	var _subject = req.body;
	subject.deleteSubject(id, function(err, subject){
		if (err){
			throw err;
		}
		res.json(subject);
	});
});


router.delete('/projects/:_id', function(req, res) {
	var id = req.params._id;
	var _project = req.body;
	project.deleteProject(id, function(err, project){
		if (err){
			throw err;
		}
		res.json(project);
	});
});

module.exports = router;

