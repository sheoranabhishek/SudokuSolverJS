const express = require("express");
const app = express();
app.use(express.static("public"));

app.post('/', (req, res) => {
    res.render(index.html);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`);
});
