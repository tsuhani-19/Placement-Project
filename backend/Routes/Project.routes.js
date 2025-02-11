// routes/projectRoutes.js
const express = require('express');
const Project = require('../models/Project'); // Import Project model
const router = express.Router();

// Create Project
router.post('/projects', async (req, res) => {
  try {
    const { projectName, projectDescription, projectDuration, teamMembers } = req.body;
    const newProject = new Project({ projectName, projectDescription, projectDuration, teamMembers });
    await newProject.save();
    res.status(201).json({ message: 'Project created successfully', project: newProject });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating project' });
  }
});

// Get All Projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching projects' });
  }
});

// Update Project
router.put('/projects/:id', async (req, res) => {
  try {
    const projectId = req.params.id;
    const { projectName, projectDescription, projectDuration, teamMembers } = req.body;
    const updatedProject = await Project.findByIdAndUpdate(
      projectId,
      { projectName, projectDescription, projectDuration, teamMembers },
      { new: true }
    );
    res.status(200).json({ message: 'Project updated successfully', project: updatedProject });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating project' });
  }
});

// Delete Project
router.delete('/projects/:id', async (req, res) => {
  try {
    const projectId = req.params.id;
    await Project.findByIdAndDelete(projectId);
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting project' });
  }
});

module.exports = router;
