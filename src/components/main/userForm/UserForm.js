import React, { useState } from 'react'
import { Form, Input, Button, Checkbox, TextArea } from 'semantic-ui-react'

const countryOptions = [
  { key: 'fi', value: 'fi', flag: 'fi', text: '+358' },
  { key: 'uk', value: 'uk', flag: 'uk', text: '+44' },
  { key: 'vn', value: 'vn', flag: 'vn', text: '+84' }
]

function UserForm() {
  const [checkboxValue, setCheckboxValue] = useState(false)
  return (
    <div className="formContainer">
      <div className="title">Personal Information</div>
      <Form>
        <Form.Field
          control={Input}
          label="First name"
          placeholder="First name"
          required={true}
        />
        <Form.Field
          control={Input}
          label="Last name"
          placeholder="Last name"
          required={true}
        />
        <Form.Field
          control={Input}
          label="Email"
          placeholder="Email"
          required={true}
        />
        <Form.Group>
          <Form.Dropdown
            label="Country code"
            placeholder="Select"
            width="5"
            fluid
            search
            selection
            options={countryOptions}
          />
          <Form.Field
            width="11"
            control={Input}
            label="Phone"
            placeholder="Phone"
            required={true}
          />
        </Form.Group>
        <Form.Field
          control={Input}
          label="Company"
          placeholder="Company"
          required={true}
        />
        <Form.Field
          control={TextArea}
          label="Additional Information"
          placeholder="Tell us more about you..."
        />
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            onChange={(e, data) => {
              setCheckboxValue(data.checked)
            }}
          />
        </Form.Field>
        <div className="continueButton">
          <Button primary type="submit" disabled={!checkboxValue}>
            Continue
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default UserForm
