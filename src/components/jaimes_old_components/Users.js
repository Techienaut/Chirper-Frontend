import React from 'react'
import {
    Card, Button, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody
} from 'reactstrap';

function Users() {

    return (
        <>

            <Card body outline color="warning">
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>User Name</CardTitle>
                    <CardSubtitle>User Id? Or Real Name</CardSubtitle>
                    <CardText>Something can go here?</CardText>
                </CardBody>
            </Card>
        </>
    )
}

export default Users