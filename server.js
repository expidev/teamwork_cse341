// express initialization
const express = require("express")
const app = express()

const port = process.env.PORT || 8080

// home route
app.use('/', require('./routes/'))

app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    }
)