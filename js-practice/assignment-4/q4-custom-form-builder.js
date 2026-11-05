// Q4: Custom Form Builder (Forms + Classes)
class FormBuilder {
  constructor(fields, mountElement) {
    this.fields = fields;
    this.mountElement = mountElement;
  }

  build() {
    const controls = this.fields.map((field, index) => {
      const id = `field-${index}`;
      const type = field.type || "text";
      const required = field.required ? "required" : "";
      return `<label for="${id}">${field.label}</label>
        <input id="${id}" name="${field.name}" type="${type}" ${required}>`;
    }).join("\n");

    this.mountElement.innerHTML = `<form id="generatedForm">${controls}
      <button type="submit">Submit</button></form><pre id="formOutput"></pre>`;

    this.mountElement.querySelector("#generatedForm").addEventListener("submit", event => {
      event.preventDefault();
      const data = this.getFormData();
      this.mountElement.querySelector("#formOutput").textContent = JSON.stringify(data, null, 2);
    });
  }

  getFormData() {
    const form = this.mountElement.querySelector("#generatedForm");
    return Object.fromEntries(new FormData(form).entries());
  }
}

const builder = new FormBuilder([
  { type: "text", name: "username", label: "Username", required: true },
  { type: "email", name: "email", label: "Email", required: true },
  { type: "number", name: "age", label: "Age" }
], document.getElementById("formMount"));
builder.build();
