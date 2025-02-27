import React from 'react';
import { Button, Picker, ScreenContainer, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const SelectLanguageScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [pickerValue, setPickerValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: palettes.App['Custom Color'] },
        dimensions.width
      )}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          { marginTop: 70, paddingLeft: 16, paddingRight: 16 },
          dimensions.width
        )}
      >
        {/* App Name */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: palettes.App['Custom Color_2'],
              fontFamily: 'System',
              fontSize: 40,
              fontStyle: 'italic',
              fontWeight: '700',
            },
            dimensions.width
          )}
        >
          {'Muscles'}
        </Text>
        {/* Tag Line */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: palettes.App['Custom Color_2'],
              fontFamily: 'Inter_500Medium',
              fontSize: 18,
              marginTop: 4,
            },
            dimensions.width
          )}
        >
          {'Exercise with style'}
        </Text>
        {/* Heading */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: palettes.App['Custom Color_2'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 23,
              marginTop: 50,
            },
            dimensions.width
          )}
        >
          {'Select your Language'}
        </Text>
        {/* Sub Heading */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: palettes.App['Custom Color_2'],
              fontFamily: 'Inter_400Regular',
              fontSize: 13,
              lineHeight: 18,
              marginTop: 8,
              opacity: 0.5,
            },
            dimensions.width
          )}
        >
          {
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
          }
        </Text>
        {/* Set Language */}
        <View
          style={StyleSheet.applyWidth(
            { borderTopWidth: 20, zIndex: 10 },
            dimensions.width
          )}
        >
          <Picker
            autoDismissKeyboard={true}
            dropDownBackgroundColor={theme.colors.background.brand}
            dropDownBorderColor={theme.colors.border.brand}
            dropDownBorderRadius={8}
            dropDownBorderWidth={1}
            iconSize={24}
            leftIconMode={'inset'}
            onValueChange={newPickerValue => {
              const pickerValue = newPickerValue;
              try {
                setPickerValue(newPickerValue);
              } catch (err) {
                console.error(err);
              }
            }}
            selectedIconName={'Feather/check'}
            selectedIconSize={20}
            type={'solid'}
            dropDownTextColor={palettes.App['Custom Color_2']}
            dropdownOverlayColor={theme.colors.text.medium}
            mode={'dropdown'}
            options={[
              { label: 'English', value: 'English' },
              { label: 'Spanish', value: 'Spanish' },
              { label: 'French', value: 'French' },
              { label: 'German', value: 'German' },
              { label: 'Chinese', value: 'Chinese' },
              { label: 'Japanese', value: 'Japanese' },
              { label: 'Korean', value: 'Korean' },
              { label: 'Italian', value: 'Italian' },
              { label: 'Portuguese', value: 'Portuguese' },
              { label: 'Russian', value: 'Russian' },
            ]}
            placeholder={'Select Language'}
            placeholderTextColor={palettes.App['Custom Color_2']}
            rightIconName={'Entypo/chevron-down'}
            selectedIconColor={palettes.App['Custom Color_2']}
            style={StyleSheet.applyWidth(
              {
                borderRadius: 8,
                color: palettes.App['Custom Color_2'],
                fontFamily: 'Inter_400Regular',
                fontSize: 16,
              },
              dimensions.width
            )}
            value={pickerValue}
          />
        </View>
        {/* Save Button */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('AboutYourselfScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.App['Custom Color_5'],
              borderRadius: 28,
              fontFamily: 'System',
              fontSize: 17,
              fontWeight: '600',
              height: 55,
              letterSpacing: 1.2,
              marginTop: 40,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Save'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SelectLanguageScreen);
