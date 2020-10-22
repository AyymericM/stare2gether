const path = require('path')
const fs = require('fs')


class AddComp {
    constructor() {
        this.compname = process.argv['2']
        this.type = process.argv['3'] || 'components'

        this.compFolderPath = path.join(__dirname, '..', 'src', this.type)
        this.start()
    }

    getTemplate() {
        const newComp =
`import React from 'react'
import styles from './${this.capitalize(this.compname, true)}.styles.js'

export default class ${this.capitalize(this.compname)} extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <p>${this.capitalize(this.compname)} is working !</p>
        )
    }
}`
        return newComp
    }

    getStyles() {
        const newComp =
`import styled from 'styled-components'

const hello = styled.div

export {
    hello
}`
        return newComp
    }

    getExport() {
        const newExport = `export { default as ${this.capitalize(this.compname)} } from './${this.capitalize(this.compname)}/${this.capitalize(this.compname, true)}.component'`
        return newExport
    }

    capitalize(_s, _invert = false) {
        if (typeof _s !== 'string') return ''

        const s = _s.toLowerCase()

        if (_invert) {
            return s.charAt(0).toLowerCase() + s.slice(1)
        } else {
            return s.charAt(0).toUpperCase() + s.slice(1)
        }
    }

    start() {
        if (this.compname) {
            
            const newComp = this.getTemplate()
            const newStyles = this.getStyles()

            fs.mkdir(path.join(this.compFolderPath, this.capitalize(this.compname)), () => {
                fs.writeFileSync(path.join(this.compFolderPath, this.capitalize(this.compname), `${this.capitalize(this.compname, true)}.component.js`), newComp)
                fs.writeFileSync(path.join(this.compFolderPath, this.capitalize(this.compname), `${this.capitalize(this.compname, true)}.styles.js`), newStyles)
                fs.readFile(path.join(this.compFolderPath, 'index.js'), (err, data) => {
                    if (!data.includes(this.getExport())) {
                        const newdata = `${data}\n${this.getExport()}`
                        fs.writeFileSync(path.join(this.compFolderPath, 'index.js'), newdata)
                    }
                })
            })
        
        } else {
            console.log('ERROR: Please specify the name of the component you want to add.')
        }
    }
}

new AddComp()