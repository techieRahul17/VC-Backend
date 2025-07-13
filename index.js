const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample VC Data
const vcs = [
    {
        name: "Sequoia Capital",
        industry: ["fintech", "automotive"],
        email: "partner@sequoiacap.com",
        website: "https://www.sequoiacap.com"
    },
    {
        name: "Accel Partners",
        industry: ["fashion", "fintech"],
        email: "contact@accel.com",
        website: "https://www.accel.com"
    },
    {
        name: "Lightspeed Ventures",
        industry: ["automotive", "AI"],
        email: "info@lsvp.com",
        website: "https://www.lsvp.com"
    }
];

// API endpoint
app.get('/api/vcs/:industry', (req, res) => {
    const industry = req.params.industry.toLowerCase();
    const filteredVCs = vcs.filter(vc =>
        vc.industry.some(i => i.toLowerCase().includes(industry))
    );
    res.json(filteredVCs);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
