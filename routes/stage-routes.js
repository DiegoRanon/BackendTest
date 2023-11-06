const express = require("express");

const controleursStage = require("../controlers/stage-controleur")
const router = express.Router();

router.get("/:stageId", controleursStage.getStageById);

router.get("/getStages/:employeurId", controleursStage.getStageByCreateur);

router.get("/getEtudiants/:stageId", controleursStage.getEtudiantsStages);

router.get("/", controleursStage.getStages)

router.post('/ajouterStage', controleursStage.creerStage);

router.post('/postulerStage/:stageId', controleursStage.postulerAuStage);

router.patch('/:stageId', controleursStage.updateStage);

router.delete('/:stageId', controleursStage.supprimerStage);


module.exports = router;
