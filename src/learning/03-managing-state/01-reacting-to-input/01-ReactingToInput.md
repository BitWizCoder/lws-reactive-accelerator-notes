## 01. Key Concepts

- UI's can be presented in two ways. Declarative and imperative.

## 02. Notes

### Table of Contents

- [Declarative vs imperative UI](#declarative-vs-imperative-ui)
- [Thinking about UI declaratively](#thinking-about-ui-declaratively)
  1. [Identify your component’s different visual states](#identify-your-components-different-visual-states)
  2. [Determine what triggers those state changes](#determine-what-triggers-those-state-changes)
  3. [Represent the state in memory using useState](#represent-the-state-in-memory-using-usestate)
  4. [Remove any non-essential state variables](#remove-any-non-essential-state-variables)
  5. [Connect the event handlers to set the state](#connect-the-event-handlers-to-set-the-state)

### Declarative vs imperative UI

### Thinking about UI declaratively

1. #### Identify your components different visual states

   - First, you need to visualize all the different “states” of the UI the user might see:

     - **Empty**: Form has a disabled “Submit” button.
     - **Typing**: Form has an enabled “Submit” button.
     - **Submitting**: Form is completely disabled. Spinner is shown.
     - **Success**: “Thank you” message is shown instead of a form.
     - **Error**: Same as Typing state, but with an extra error message.

2. #### Determine what triggers those state changes

   - You can trigger state updates in response to two kinds of inputs:

     - **Human inputs**, like clicking a button, typing in a field, navigating a link.
     - **Computer inputs**, like a network response arriving, a timeout completing, an image loading.

   - In both cases, **you must set state variables to update the UI**. For the form you’re developing, you will need to change state in response to a few different inputs:

     - **Changing the text input** (human) should switch it from the Empty state to the Typing state or back, depending on whether the text box is empty or not.
     - **Clicking the Submit button** (human) should switch it to the Submitting state.
     - **Successful network response** (computer) should switch it to the Success state.
     - **Failed network response** (computer) should switch it to the Error state with the matching error message.

3. #### Represent the state in memory using useState

   - Next you’ll need to represent the visual states of your component in memory with useState. Simplicity is key: each piece of state is a “moving piece”, and **you want as few “moving pieces” as possible**. More complexity leads to more bugs!
   - Start with the state that absolutely must be there. For example, you’ll need to store the answer for the input, and the error (if it exists) to store the last error:

     ```js
     const [answer, setAnswer] = useState("");
     const [error, setError] = useState(null);
     ```

   - Then, you’ll need a state variable representing which one of the visual states that you want to display. There’s usually more than a single way to represent that in memory, so you’ll need to experiment with it.
   - If you struggle to think of the best way immediately, start by adding enough state that you’re definitely sure that all the possible visual states are covered:
     ```js
     const [isEmpty, setIsEmpty] = useState(true);
     const [isTyping, setIsTyping] = useState(false);
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [isSuccess, setIsSuccess] = useState(false);
     const [isError, setIsError] = useState(false);
     ```
   - Your first idea likely won’t be the best, but that’s ok—refactoring state is a part of the process!

4. #### Remove any non-essential state variables

   - You want to avoid duplication in the state content so you’re only tracking what is essential. Spending a little time on refactoring your state structure will make your components easier to understand, reduce duplication, and avoid unintended meanings. Your goal is to prevent the cases where the state in memory doesn’t represent any valid UI that you’d want a user to see. (For example, you never want to show an error message and disable the input at the same time, or the user won’t be able to correct the error!)
   - Here are some questions you can ask about your state variables:
     - **Does this state cause a paradox?** For example, isTyping and isSubmitting can’t both be true. A paradox usually means that the state is not constrained enough. There are four possible combinations of two booleans, but only three correspond to valid states. To remove the “impossible” state, you can combine these into a status that must be one of three values: 'typing', 'submitting', or 'success'.
     - **Is the same information available in another state variable already?** Another paradox: isEmpty and isTyping can’t be true at the same time. By making them separate state variables, you risk them going out of sync and causing bugs. Fortunately, you can remove isEmpty and instead check answer.length === 0.
     - **Can you get the same information from the inverse of another state variable?** isError is not needed because you can check error !== null instead.
   - After this clean-up, you’re left with 3 (down from 7!) essential state variables:

     ```js
     const [answer, setAnswer] = useState("");
     const [error, setError] = useState(null);
     const [status, setStatus] = useState("typing"); // 'typing', 'submitting', or 'success'
     ```

5. #### Connect the event handlers to set the state

   - Lastly, create event handlers that update the state. Below is the final form, with all event handlers wired up:

   ```js
   export default function Form() {
     const [answer, setAnswer] = useState("");
     const [error, setError] = useState(null);
     const [status, setStatus] = useState("typing");

     if (status === "success") {
       return <h1>That's right!</h1>;
     }

     async function handleSubmit(e) {
       e.preventDefault();
       setStatus("submitting");
       try {
         await submitForm(answer);
         setStatus("success");
       } catch (err) {
         setStatus("typing");
         setError(err);
       }
     }

     function handleTextareaChange(e) {
       setAnswer(e.target.value);
     }

     return (
       <>
         <h2>City quiz</h2>
         <p>
           In which city is there a billboard that turns air into drinkable
           water?
         </p>
         <form onSubmit={handleSubmit}>
           <textarea
             value={answer}
             onChange={handleTextareaChange}
             disabled={status === "submitting"}
           />
           <br />
           <button disabled={answer.length === 0 || status === "submitting"}>
             Submit
           </button>
           {error !== null && <p className="Error">{error.message}</p>}
         </form>
       </>
     );
   }

   function submitForm(answer) {
     // Pretend it's hitting the network.
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         let shouldError = answer.toLowerCase() !== "lima";
         if (shouldError) {
           reject(new Error("Good guess but a wrong answer. Try again!"));
         } else {
           resolve();
         }
       }, 1500);
     });
   }
   ```

<!-- 1. Identify your component’s different visual states
- First, you need to visualize all the different “states” of the UI the user might see:
2. Determine what triggers those state changes
3. Represent the state in memory using useState
4. Remove any non-essential state variables
5. Connect the event handlers to set the state -->

## 03. Summery

```js
// This is a code block
```
