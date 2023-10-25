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

export const Email = ({ name, email, city, message }) => {

    return (
        <Html>
            <Head />
            <Tailwind>
                <Body className="mx-auto my-auto bg-white font-sans">
                    <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid" >
                        <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal">
                            <Text className="text-[14px] leading-[24px] text-black">
                                You got an email from <strong>{name}</strong>.
                                Their email is{" "}{email}.
                                They are from{" "}{city}.
                                Project info: <br /> {message}
                            </Text>
                        </Heading>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
} 