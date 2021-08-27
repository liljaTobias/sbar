import { Button, Card, CardActions, CardContent } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

import { Categories, SubCategories } from '../../utils/database'
import { useStyles } from './StepperPage.style'

interface StepOneProps {
    category: number
    handleNextStep: (id: number) => void
    handlePrevStep: () => void
}

const StepOne: React.FC<StepOneProps> = ({ category, handleNextStep, handlePrevStep }) => {
    const [currentData, setCurrentData] = useState<any>()
    const styles = useStyles()

    useEffect(() => {
        if (category === -1) setCurrentData(Categories)
        else {
            const foundData = SubCategories.find(sb => sb.parent === category)
            setCurrentData(foundData)
            console.log("HERE", foundData)
        }
        console.log(currentData, category)
    }, [category])

    const renderStep = () => {

    }

    return (
        <Card>
            <CardContent>
                {currentData && currentData.map((category: any) => {
                    return (
                        <Button
                            color="primary"
                            variant="contained"
                            fullWidth
                            className={styles.button}
                            onClick={() => handleNextStep(category.id)}
                        >
                            {category.name}
                        </Button>
                    )
                })}
            </CardContent>
            <CardActions>
                <Button onClick={handlePrevStep} disabled={category === -1}>Tillbaka</Button>
            </CardActions>
        </Card>
    )
}

export default StepOne