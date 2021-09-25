import { Button, Card, CardActions, CardContent, Container, Typography } from '@material-ui/core'
import React from 'react'
import Menu from '../Menu'

import { useStyles } from './Dashboard.style'

const Dashboard: React.FC = () => {
    const classes = useStyles()

    return (
        <>
            <Menu />
            <Container maxWidth="xs" className={classes.container}>
                <Card>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Introduktion till hjälpverktyget
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            Rapporteringsstöd enligt SBAR
                        </Typography>
                        <Typography>
                            Denna sida innehåller ett antal symtombilder. För att sjuksköterskan ska få en så
                            fullständig bild som möjligt av patientens tillstånd finns ett antal frågor för varje
                            symtombild. Dessa förväntas bas-personal så långt som möjligt kunna svara på när
                            sjuksköterska kontaktas. Bedömningsstödet gör att samma frågor ställs, oavsett vilken
                            sjuksköterska som kontaktas, samtidigt som det utgör ett lärande för baspersonal i
                            iakttagande av patient.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button disabled>Läs mer</Button>
                    </CardActions>
                </Card>
            </Container>
        </>
    )
}

export default Dashboard
