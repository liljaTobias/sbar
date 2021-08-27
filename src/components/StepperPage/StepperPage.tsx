import { Button, Card, CardContent, MobileStepper, Typography, CardHeader, Box, Grid } from '@material-ui/core'
import React, { useCallback, useState } from 'react'
import StepOne from './StepOne'
import { useStyles } from './StepperPage.style.js'

interface StepperPageProps {
}

const StepperPage: React.FC<StepperPageProps> = (props) => {
    const [currentStep, setCurrentStep] = useState(0)
    const [currentCategory, setCurrentCategory] = useState(-1)
    const styles = useStyles()

    const handleNextStep = (id: number) => {
        setCurrentCategory(id)
        setCurrentStep(currentStep + 1)
    }

    const handlePrevStep = (id: number) => {
        setCurrentCategory(-1)
        setCurrentStep(currentStep - 1)
    }

    const renderStep = useCallback((category: number, nextStepFunc, prevStepFunc) => {
        return <StepOne category={category} handleNextStep={nextStepFunc} handlePrevStep={prevStepFunc} />
    }, [currentStep])

    return (
        <Grid className={styles.layout}>
            <Typography variant="h1" className={styles.h1} gutterBottom>Rapporteringsstöd</Typography>
            {renderStep(currentCategory, handleNextStep, handlePrevStep)}
            {/* <MobileStepper
                    activeStep={currentStep}
                    variant="dots"
                    position="static"
                    steps={3}
                    nextButton={
                        <Button onClick={() => setCurrentStep(currentStep + 1)} disabled={currentStep === 2}>
                            Next
                        </Button>
                    }
                    backButton={
                        <Button onClick={() => setCurrentStep(currentStep - 1)} disabled={currentStep === 0}>
                            Back
                        </Button>
                    }
                /> */}
        </Grid>
    )
}

export default StepperPage