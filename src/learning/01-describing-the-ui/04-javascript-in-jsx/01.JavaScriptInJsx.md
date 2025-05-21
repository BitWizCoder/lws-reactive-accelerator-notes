## 01. Key Concepts

- Curly braces let you bring JavaScript logic and variables into your markup.
- {{ and }} is not special syntax: it’s a JavaScript object tucked inside JSX curly braces.

## 02. Notes

- When you want to pass a string attribute to JSX, you put it in single or double quotes

  ```javascript
  export default function Avatar() {
    return (
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
    );
  }
  ```

- if you want to dynamically specify the src or alt text? You could use a value from JavaScript by replacing " and " with { and }

  ```javascript
  export default function Avatar() {
    const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
    const description = "Gregorio Y. Zara";
    return <img className="avatar" src={avatar} alt={description} />;
  }
  ```

- JSX is a special way of writing JavaScript. That means it’s possible to use JavaScript inside it—with curly braces { }. The example below first declares a name for the scientist, name, then embeds it with curly braces inside the h1

  ```javascript
  export default function TodoList() {
    const name = "Gregorio Y. Zara";
    return <h1>{name}'s To Do List</h1>;
  }
  ```

  - Any JavaScript expression will work between curly braces, including function calls like formatDate():

- there is onley two ways to use curly braces in JSX

  1.  Inside Tags as Content (between the opening and closing tags)

      ```javascript
      const name = "Muhammad";
      <h1>{name}'s To Do List</h1>;
      ```

  2.  Inside Attributes — right after the = sign

      ```javascript
      const avatar = "https://example.com/avatar.png";
      <img src={avatar} />;
      ```

- To pass a JS object in JSX, you must wrap the object in another pair of curly braces

  ```javascript
  person={{ name: "Hedy Lamarr", inventions: 5 }}
  ```

- if you need an inline style, you can pass an object to the style attribute

  ```javascript
  <ul
    style={{
      backgroundColor: "black",
      color: "pink",
    }}
  >
    <li>Improve the videophone</li>
    <li>Prepare aeronautics lectures</li>
    <li>Work on the alcohol-fuelled engine</li>
  </ul>
  ```

- You can move several expressions into one object, and reference them in your JSX inside curly braces

  ```javascript
  const person = {
    name: "Gregorio Y. Zara",
    theme: {
      backgroundColor: "black",
      color: "pink",
    },
  };

  export default function TodoList() {
    return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }
  ```

## 03. Summery

curly braces let us use javascript inside jsx. with this it's possible to provide dynamic data inside tags and attributes. also you can pass style objects and and objects with it.
