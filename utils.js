/**
 * Beat class that keeps track of playing the audio
 */
class Beat {
    constructor(audio) {
        this.audioSrc = new Audio(audio)
    }

    play = () => {

        // For every press it start to zero
        this.audioSrc.currentTime = 0
        this.audioSrc.play()
    }
}

/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, keyCode) {
        this.buttonColor = color
        this.keyCode = keyCode
        this.button = document.getElementById(this.keyCode)
        this.pressCount = 0
        this.setButtonColorInHtml()
        this.setTransitionEndListener()

    }

    /**
     * Set the button color based on color specified
     */
    setButtonColorInHtml() {
        this.button.style.border = `5px solid ${this.buttonColor}`
    }

    // Deselect element
    setTransitionEndListener = () => {
        this.button.addEventListener('transitionend', () => {
            this.deSelect()
            this.pressCount = 0
        })

    }

    /**
     * Select function to set the background color and boxShadow
     */
    select = () => {
        console.log(this.pressCount)
        this.pressCount++
        this.pressCount > 3 ? this.deSelect() : ''

        this.button.style.backgroundColor = this.buttonColor
        this.button.style.boxShadow = `0px 0px 15px 4px ${this.buttonColor}`
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deSelect = () => {
        this.button.style.backgroundColor = 'transparent'
        this.button.style.boxShadow = `0px 0px 15px 4px transparent`
    }

}