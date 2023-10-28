import React from "react";
import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Tailwind,
    Text,
} from "@react-email/components";

// const emailProps = {
//     name: '',
//     email: '',
//     city: '',
//     message: '',
// }

export const Email = ({ name, email, city, serviceSuggestion, message }) => {

    console.log("email: ", Email)

    return (
        <Html>
            <Head />
            <Tailwind>
                <Body className="mx-auto my-auto bg-white font-sans">
                    <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid" >
                        <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal">
                            <Text className="text-[14px] leading-[24px] text-black">
                                <strong>{name}</strong>{" "} from{" "}{city}{" "}wants to schedule an estimate.
                                <br />
                                Suggested Service:
                                <br />
                                {serviceSuggestion}
                                <br />
                                Project info: 
                                <br /> 
                                {message}
                                <br />
                                Their email is:
                                <br />
                                {email}.
                            </Text>
                        </Heading>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
} 