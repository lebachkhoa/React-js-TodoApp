import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/forms-control/InputField';

TodoForm.propType = {
  onsubmit: PropTypes.func,
};

function TodoForm() {
    const form = useForm({
        
    })

  return (
    <form>
      <InputField />
    </form>
  );
}

export default TodoForm;
