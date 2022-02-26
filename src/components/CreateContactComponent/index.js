import React from 'react';
import { Image, Text, View } from 'react-native';
import Input from '../common/Input/'
import CommonButton from '../common/CommonButton/'
import styles from './styles';
import Container from '../common/Container';
import CountryPicker from 'react-native-country-picker-modal'
import { DEFAULT_IMAGE_URI } from '../../constants/general';

const CreateContactComponent = ({
    error,
    form,
    setForm,
    loading,
    onChangeHandler,
    submitForm
}) => {
    return (
        <View style={styles.wrapper} >
            <Container>

                <Image style={styles.image} source={{ uri: DEFAULT_IMAGE_URI }} width={100} height={100} />
                <Text style={styles.chooseText}>Choose Image</Text>
                <Input
                    label='First Name'
                    placeholder='Enter First Name'
                    onChangeText={(val) => { onChangeHandler({ val, name: 'first_name' }) }}
                />
                <Input
                    label='Last Name'
                    placeholder='Enter Last Name'
                    onChangeText={(val) => { onChangeHandler({ val, name: 'last_name' }) }}

                />
                <Input
                    icon={<CountryPicker
                        withFilter
                        withFlag
                        countryCode={form.phone_code || undefined}
                        withAlphaFilter
                        withCallingCode
                        withEmoji
                        onSelect={(val) => {
                            const calling_code = val.callingCode[0]
                            const phone_code = val.cca2
                            // console.log('Counry', phone)
                            // console.log('Country code', country_code)
                            setForm({ ...form, country_code: calling_code, phone_code })
                        }}

                    />}
                    iconPosition='left'
                    style={{ paddingLeft: 10 }}
                    label='Phone Number'
                    placeholder='Enter Phone Number'
                    onChangeText={(val) => { onChangeHandler({ val, name: 'phone_number' }) }}
                />
                <CommonButton
                    title='Submit'
                    primary
                    onPress={submitForm}
                    loading={loading}
                    disabled={loading}
                />

            </Container>
        </View>
    );
}

export default CreateContactComponent;
