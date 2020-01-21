class Input {
  constructor(name, inputData) {
    this.inputData = inputData;
    this.name = name;
  }

  getFormattedDateString() {
    const d = new Date(Date.now());
    let month = d.getMonth() + 1;
    month = month.length > 1 ? month : '0' + month;
    let day = d.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return `${d.getFullYear()}-${month}-${day}`;
  }

  render() {
    const required = this.inputData.required ? 'required' : '';
    const name = `name="${this.name}"`;

    switch (this.inputData.type) {
      case 'text':
        return `<input type="text" ${name} placeholder="${this.inputData.placeholder}" ${required} />`;
        break;

      case 'textarea':
        return `<textarea ${name} placeholder="${this.inputData.placeholder}" ${required} /></textarea>`;
        break;

      case 'select':
        const options = this.inputData.options.map(option => `<option value="${option.value}">${option.text}</option>`);
        return `<select ${name} ${required}>${options.join('')}</select>`;
        break;

      case 'date':
        const minDate = this.getFormattedDateString();
        return `<input type="date" ${name} min="${minDate}" ${required} />`;
        break;

      default:
        return `<input type="text" name="${name}" placeholder="${this.inputData.placeholder}" ${required} />`;
        break;
    }
  }
}

// export default Input;
