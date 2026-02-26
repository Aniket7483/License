const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const licenses = {
    "127.0.0.1": true,
    "localhost": true,
    "https://paramgroup.in/": true,
    "paramgroup.in": true
};
app.get("/check-license", (req, res) => {
    const domain = req.query.domain;

    if (licenses[domain]) {
        res.json({ valid: true });
    } else {
        res.json({ valid: false });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 License server running on port ${PORT}`);
});
