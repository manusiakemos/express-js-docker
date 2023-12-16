const express = require('express');
const router = express.Router();
const {Users} = require('../models/index')
router.get('/', async function (req, res, next) {
    try {
        const {offset, limit} = req.pagination; // Access pagination info
        const data = await Users.findAll({offset, limit});
        if (data.length !== 0) {
            res.json({
                'status': 'ok',
                'messages': 'list user',
                'data': data
            })
        } else {
            res.json({
                'status': 'error',
                'messages': 'empty',
                'data': null
            })
        }
    } catch (err) {
        res.json({
            'status': 'error',
            'messages': err.message,
            'data': null
        })
    }
});

router.get("/:id", async function (req, res) {
    try {
        const data = await Users.findByPk(req.params.id);
        if (data.length !== 0) {
            res.json({
                'status': 'ok',
                'messages': 'show user',
                'data': data
            })
        } else {
            res.json({
                'status': 'error',
                'messages': 'empty',
                'data': null
            })
        }
    } catch (err) {
        res.json({
            'status': 'error',
            'messages': err.message,
            'data': null
        })
    }
});
//
// router.post("/", function(req, res) {
//     db.User.create({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         id: req.body.id
//         })
//         .then( person => {
//             res.status(200).send(JSON.stringify(person));
//         })
//         .catch( err => {
//             res.status(500).send(JSON.stringify(err));
//         });
// });
//
// router.put("/:id", function(req, res) {
//     db.User.update({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         id: req.body.id
//         })
//         .then( person => {
//             res.status(200).send(JSON.stringify(person));
//         })
//         .catch( err => {
//             res.status(500).send(JSON.stringify(err));
//         });
// });
//
//
// router.delete("/:id", function(req, res) {
//     db.User.destroy({
//         where: {
//             id: req.params.id
//         }
//         })
//         .then( () => {
//             res.status(200).send();
//         })
//         .catch( err => {
//             res.status(500).send(JSON.stringify(err));
//         });
// });

module.exports = router;