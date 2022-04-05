
exports.welcome = async (req, res) => {
    if (req.user.role == 1) {
        res.status(200).send({message : "page admin"});
    } else {
        res.status(403).send({message: "unuthorize page"});
    }
};

exports.user = async (req, res) => {
    if (req.user.role == 2) {
        res.status(200).send({message : "page user"});
    } else {
        res.status(403).send({message: "unuthorize page"});
    }
};