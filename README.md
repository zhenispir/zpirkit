## Databases

**Database** – structured collection of data accessible by different applications.

**Relational database** – data items linked by internal pointers.

**Table** – group of data with rows (instances) and columns (attributes).

**Record** – a row in a table.

**Attribute** – individual data item stored for an entity (e.g., name, address).

**Field** – a column in a table.

**Tuple** – one instance of an entity (a row).

**Entity** – anything that can have data stored about it (person, place, event, thing).

**Index** – data structure built from columns to speed up searching.

**Relationship** – one table has a foreign key referring to a primary key in another table.

**Primary key** – unique identifier for a table; special candidate key.

**Composite key** – set of attributes forming a primary key.

**Foreign key** – attribute(s) in one table referring to a primary key in another.

**Entity-Relationship (E-R) Model / ERD** – graphical representation of database and relationships.

### Normalisation

Process of organising data to minimise redundancy.

- **1NF** – no repeated groups of attributes.
- **2NF** – 1NF + non-key attributes depend on the primary key.
- **3NF** – 2NF + all non-key attributes are independent.

### DBMS and Data Management

**Database Management System (DBMS)** – software for defining, creating, and manipulating databases; solves redundancy, inconsistency, and dependency issues.

**Data management** – organisation and maintenance of data.

**Data dictionary** – contains metadata (data about data).

### Common Data Types

| Data Type | Description |
|-----------|-------------|
| `CHARACTER `| Fixed-length text. |
| `VARCHAR(n)` | Variable-length text (up to n characters). |
| `BOOLEAN` | Logical values (True/False); often 1 or 0 in SQL. |
| `INTEGER `| Whole numbers. |
| `REAL `| Numbers with decimal places (floating point). |
| `DATE `| Date format, usually YYYY-MM-DD. |
| `TIME `| Time format, usually HH:MM:SS. |

---

## Structured Query Language (SQL)

Standard language for relational databases.

### Data Definition Language (DDL) Commands

| SQL Command | Purpose |
|-------------|---------|
| `CREATE DATABASE` | Creates a new database container. |
| `CREATE TABLE` | Defines a new table and its columns/data types. |
| `ALTER TABLE` | Modifies an existing table's structure. |
| `PRIMARY KEY` | Uniquely identifies each record in a table. |
| `FOREIGN KEY ... REFERENCES` | Links a field to a Primary Key in another table. |

### Data Manipulation Language (DML) – Query Commands

| Command | Description |
|---------|-------------|
| `SELECT … FROM …` | Fetches data from a database. |
| `WHERE `| Filters rows based on a condition. |
| `ORDER BY … ASC / DESC` | Sorts results. |
| `GROUP BY` | Groups rows with same values into summary rows. |
| `INNER JOIN … ON …` | Combines rows from different tables when conditions are met. |

### DML – Maintenance Commands

| Command | Description |
|---------|-------------|
| `INSERT INTO … VALUES …` | Adds new records (rows). |
| `DELETE FROM` | Removes existing records. |
| `UPDATE … SET …` | Modifies existing data. |

---

## Programming Paradigms and Generations

**Programming paradigm** - a set of programming concepts.

**Low- level programming** - programming instructions that use the computer's basic instruction set.

**High- level programming language** - is a programming language with strong abstraction.

### Programming Generations
<table>
<tr><th>Paradigm</th><th>Generation</th><th>Type</th><th>Key Features</th><th>Translation</th><th>Examples</th></tr>
<tr><td rowspan="2">Low</td><td>1GL</td><td>Machine Code</td><td>Binary (0s and 1s). Machine-dependent. Direct hardware control.</td><td>None (Executes directly).</td><td>Pure Binary.</td></tr>
<tr><td>2GL</td><td>Assembly</td><td>Uses mnemonics (e.g., ADD, MOV). Machine-dependent. Used for kernels/drivers.</td><td>Assembler</td><td>x86 Assembly, ARM.</td></tr>
<tr><td  rowspan="3">High</td><td>3GL</td><td>High-Level (Procedural)</td><td>English-like keywords. Machine-independent. Focuses on how to solve (algorithms).</td><td>Compiler or Interpreter</td><td>C, C++, Java, Python.</td></tr>
<tr><td>4GL</td><td>Declarative</td><td>Non-procedural. Focuses on what is required rather than the steps to get there.</td><td>Specific Engine/Compiler</td><td>SQL, MatLab.</td></tr>
<tr><td>5GL</td><td>AI / Logic</td><td>Constraint-based. Uses logic and facts rather than explicit algorithms.</td><td>Specific Inference Engine</td><td>Prolog, Mercury.</td></tr>
</table>

Figure. Programming language generations.

### Advantages and disadvantages of low-level programming languages
<table>
<tr><th>Advantages</th><th>Disadvantages</th></tr>
<tr><td>Direct Hardware Control: Can manipulate specific registers, ports, and memory addresses directly.</td><td>Machine Dependent: Code is written for a specific CPU architecture (e.g., x86 vs. ARM) and is not portable.</td></tr>
<tr><td>High Performance: Executes very quickly as there is little to no translation overhead.</td><td>Difficult to Read/Write: Uses binary (1s and 0s) or cryptic mnemonics (e.g., MOV, JMP).</td></tr>
<tr><td>Memory Efficiency: Can be written to occupy the smallest possible memory footprint.</td><td>Hard to Debug: Finding logical errors is time-consuming and requires deep knowledge of hardware.</td></tr>
<tr><td>No &quot;Bloat&quot;: Only includes the exact instructions needed for the task.</td><td>No Complex Libraries: Programmers must write almost everything from scratch.</td></tr>
</table>

Table. Advantages and disadvantages of low-level programming languages.

### Advantages and disadvantages of high-level programming languages
<table>
<tr><th>Advantages</th><th>Disadvantages</th></tr>
<tr><td>English-like Keywords: Easier to read, write, and maintain (e.g., print, while).</td><td>Slower Execution: Must be translated by a compiler or interpreter before the CPU can run it.</td></tr>
<tr><td>Machine Independent: Code is portable; it can run on different hardware architectures with little to no change.</td><td>Less Memory Efficient: Often requires more RAM and storage because the code isn&#x27;t perfectly optimized for specific hardware.</td></tr>
<tr><td>Built-in Functions: Access to large libraries of pre-written code (e.g., for sorting or graphics).</td><td>Lack of Direct Control: Programmer cannot easily manipulate specific CPU registers or memory addresses.</td></tr>
<tr><td>Easier Debugging: Tools and error messages are more descriptive and human-readable.</td><td></td></tr>
</table>

Table. Advantages and disadvantages of high-level programming languages.

### Imperative and Declarative programming paradigms

**Imperative programming** - in which the steps required to execute a program are set out in the order.

**Declarative programming** - statements of facts and rules together with a mechanism for setting goals in the form of a query.

<table>
<tr><th>Feature</th><th>Imperative (Procedural)</th><th>Declarative</th></tr>
<tr><td>Focus</td><td>Focuses on HOW the computer should perform a task.</td><td>Focuses on WHAT the computer should achieve.</td></tr>
<tr><td>Logic</td><td>Provides a step-by-step sequence of instructions.</td><td>Defines the logic and constraints of the result.</td></tr>
<tr><td>State</td><td>Uses variables and mutable state; values change as the program runs.</td><td>Often stateless or uses immutable data; results are derived from logic/functions.</td></tr>
<tr><td>Examples</td><td>C, Pascal, Python, Java.</td><td>SQL, Prolog, Haskell, HTML.</td></tr>
</table>

Table. Comparison of imperative and declarative programming paradigms.

## Assembly Language Mnemonics

<table>
<tr><th>Mnemonic</th><th>Description</th><th>In Action (Example)</th></tr>
<tr><td>INP</td><td>Retrieves user input and stores it in the Accumulator (ACC).</td><td>INP (User enters 10; ACC = 10)</td></tr>
<tr><td>OUT</td><td>Outputs the value currently stored in the Accumulator.</td><td>OUT (Displays the value 10)</td></tr>
<tr><td>LDA</td><td>Loads the contents of the given memory address into the ACC.</td><td>LDA 15 (Copies value at address 15 to ACC)</td></tr>
<tr><td>STA</td><td>Stores the value in the ACC into the given memory address.</td><td>STA RESULT (Saves ACC value to label RESULT)</td></tr>
<tr><td>ADD</td><td>Adds the contents of the memory address to the ACC.</td><td>ADD 12 (ACC = ACC + value at address 12)</td></tr>
<tr><td>SUB</td><td>Subtracts the contents of memory address from the ACC.</td><td>SUB 12 (ACC = ACC - value at address 12)</td></tr>
<tr><td>BRP</td><td>Branch if Positive: Jump to address if ACC is zero or positive.</td><td>BRP LOOP (If ACC is 0 or positive, go to LOOP)</td></tr>
<tr><td>BRZ</td><td>Branch if Zero: Jump to address if ACC is exactly 0.</td><td>BRZ END (If ACC is 0, go to END)</td></tr>
<tr><td>BRA</td><td>Branch Always: Jump to the address unconditionally.</td><td>BRA START (Jump back to START every time)</td></tr>
<tr><td>HLT</td><td>Halt: Stops the program execution.</td><td>HLT (Ends the code)</td></tr>
<tr><td>DAT</td><td>Reserves a memory address or stores a constant.</td><td>NUM1 DAT 5 (Stores value 5 at label NUM1)</td></tr>
</table>

Table. Assembly Language Mnemonics (LMC or NIS Standard)

## Compilation Stages

The process of translating / compilation a source program written in a high- level language into an object program in machine code can be divided into four stages: **lexical analysis, syntax analysis, code generation and optimisation**.

**Lexical analysis** - the first stage in the process of compilation: removes unnecessary characters and tokenises the program.

**Syntax analysis** - the second stage in the process of compilation: output from the lexical analysis is checked for grammatical (syntax) errors.

**Code generation** - the third stage in the process of compilation: this stage produces an object program.

**Optimisation (compilation)** - the fourth stage in the process of compilation: the creation of an efficient object program.

## Pseudocode

### Pseudocode 

**Pseudocode** - a method of showing the detailed logical steps in an algorithm, using keywords, identifiers with meaningful names, and mathematical operators.

<table>
<tr><th>Operation</th><th>Syntax Example</th><th>Notes</th></tr>
<tr><td>Input</td><td>INPUT UserValue</td><td>Receives data from the user.</td></tr>
<tr><td>Output</td><td>OUTPUT &quot;Result: &quot;, Total</td><td>Displays strings and/or variables.</td></tr>
<tr><td>Assignment</td><td>Counter ← 1</td><td>Uses the left arrow to store values.</td></tr>
<tr><td>+</td><td>Addition</td><td></td></tr>
<tr><td>-</td><td>Subtraction</td><td></td></tr>
<tr><td>*</td><td>Multiplication</td><td></td></tr>
<tr><td>/ (DIV)</td><td>Division</td><td></td></tr>
<tr><td>% (MOD)</td><td>Remainder</td><td></td></tr>
<tr><td>&amp;</td><td>String Concatenation</td><td></td></tr>
<tr><td>=</td><td>Equal to</td><td></td></tr>
<tr><td>&lt;&gt;</td><td>Not equal to</td><td></td></tr>
<tr><td>&lt;</td><td>Greater than</td><td></td></tr>
<tr><td>&gt;</td><td>Less than</td><td></td></tr>
<tr><td>&gt;=</td><td>Greater than or equal to</td><td></td></tr>
<tr><td>&lt;=</td><td>Less than or equal to</td><td></td></tr>
<tr><td>Arithmetic</td><td>Result ← A + B * C / D</td><td>Standard math operators apply.</td></tr>
<tr><td>String Concatenation</td><td>FullName ← First &amp; Last</td><td>Use the &amp; symbol to join strings.</td></tr>
<tr><td>Single Choice</td><td>IF ... THEN<br>...<br>ENDIF</td><td>Executes a block of code only if the condition is true.</td></tr>
<tr><td>Single Choice with Alternative</td><td>IF ... THEN<br>...<br>ELSE<br>...<br>ENDIF</td><td>Executes one block if the condition is true, and a different block if it is false.</td></tr>
<tr><td>Count-Controlled (FOR)</td><td>FOR Counter ← 1 TO 10<br>STEP 2<br>OUTPUT Counter<br>NEXT Counter</td><td>Repeats a fixed number of times. The STEP is optional and defines the increment.</td></tr>
<tr><td>Post-Condition (REPEAT)</td><td>REPEAT<br>INPUT Number<br>UNTIL Number &gt; 0</td><td>The code inside is always executed at least once. The condition is checked at the end.</td></tr>
<tr><td>Pre-Condition (WHILE)</td><td>WHILE Number &gt; 0 DO<br>INPUT Number<br>ENDWHILE</td><td>The condition is checked before the loop starts. If the condition is false initially, the code never runs.</td></tr>
</table>

Table. Operation in a pseudocode.

**Data type** - a classification attributed to an item of data, which determines the types of value it can take.

**Identifier** - a unique name applied to an item of data

`DECLARE <identifier> : <data type>`

`DECLARE noPages : INTEGER`

**Abstract data type (ADT)** - a collection of data and a set of operations on that data.

**Array** - a data structure containing several elements of the same data type.

**Index (array)** - a numerical indicator of an item of data's position in an array.

**Lower bound (LB)** - the index of the first element in an array, usually 0 or 1.

**Upper bound (UB)** - the index of the last element in an array.

`DECLARE <identifier> : ARRAY[LB:UB] OF <data type>`

`DECLARE myList : ARRAY[0:8] OF INTEGER`

`DECLARE myArray : ARRAY[0:8,0:2] OF INTEGER    // 2D-array `

## Sorting and Searching Algorithms

### Linear search

**Linear search** - a method of searching in which each element of an array is checked in order.

```
DECLARE myList : ARRAY[0:9] OF INTEGER
DECLARE upperBound : INTEGER
DECLARE lowerBound : INTEGER
DECLARE index : INTEGER
DECLARE item : INTEGER
DECLARE found : BOOLEAN
upperBound ← 9
lowerBound ← 0
OUTPUT "Please enter item to be found"
INPUT item
found ← FALSE
index ← lowerBound
REPEAT
IF item = myList[index]
THEN
found ← TRUE
ENDIF
index ← index + 1
UNTIL (found = TRUE) OR (index > upperBound)
IF found
THEN
OUTPUT "Item found"
ELSE
OUTPUT "Item not found"
ENDIF
```

Pseudocode. Linear Search.

### Binary search

**Binary search** - a method of searching an ordered list by testing the value of the middle item in the list and rejecting the half of the list that does not contain the required value.

```
DECLARE num : ARRAY[0:8] OF INTEGER
target ← 55
low ← 0
high ← 8
WHILE low <= high
mid ← (low + high)/2
IF num[mid] = target THEN
OUTPUT mid
BREAK
ELSE IF num[mid] < target THEN
low ← mid + 1
ELSE
high ← mid - 1
ENDIF
ENDWHILE
OUTPUT "Not found"
```

Pseudocode. Binary Search.

### Bubble sort

**Bubble sort** - a method of sorting data in an array into alphabetical or numerical order by comparing adjacent items and swapping them if they are in the wrong order.

```
DECLARE myList : ARRAY[0:8] OF INTEGER
DECLARE upperBound : INTEGER
DECLARE lowerBound : INTEGER
DECLARE index : INTEGER
DECLARE swap : BOOLEAN
DECLARE temp : INTEGER
DECLARE top : INTEGER
upperBound ← 8
lowerBound ← 0
top ← upperBound
REPEAT
FOR index ← lowerBound TO top - 1
Swap ← FALSE
IF myList[index] > myList[index + 1] THEN
temp ← myList[index]
myList[index] ← myList[index + 1]
myList[index + 1] ← temp
swap ← TRUE
ENDIF
NEXT
top ← top - 1
UNTIL (NOT swap) OR (top = 0)
```

Pseudocode. Bubble Sort.

### Insertion sort

**Insertion sort** - a method of sorting data in an array into alphabetical or numerical order by placing each item in turn in the correct position in the sorted list.

```
FOR i ← 1 TO 8
j ← i
WHILE j > 0 AND num[j- 1] > num[j]
temp ← num[j]
num[j] ← num[j-1]
num[j-1] ← temp
 j ← j - 1
ENDWHILE
NEXT i
```
Pseudocode. Insertion Sort.

### Big O notation, Time and Sapce Complexitity

**Big O notation** - is a mathematical notation used to describe the performance or complexity of an algorithm in relation to the time taken (**time complexity**) or the memory used (**space complexity**) for the task. It is used to describe the worst- case scenario.

**Stack** - a list containing several items operating on the last in, first out (LIFO) principle.

**Queue** - a list containing several items operating on the first in, first out (FIFO) principle.

**Binary tree** - a hierarchical data structure in which each parent node can have a maximum of two child nodes.

<img width="1090" height="413" alt="Image" src="https://github.com/user-attachments/assets/0e00cb24-01d1-4b3e-a0d3-605d48939df2" />
<center>Figure. Binary tree. </center>

## Web Development

### HTML

**HTML (Hyper Text Markup Language)** - provides the logical structure and content of the page.

#### Core HTML Tags

- **`<html>`** – The root element that wraps all other content on the page.
- **`<head>`** – Contains meta‑information about the page (title, links to CSS, etc.) that does not show in the body.
- **`<body>`** – Contains all visible elements (text, images, links, etc.).
- **`<h1>` to `<h6>`** – Headings, where `<h1>` is the most important (usually the main title) and `<h6>` is the least important.
- **`<p>`** – Defines a paragraph of text.
- **`<a href="...">`** – An anchor tag used for hyperlinks; requires the `href` attribute to specify the destination URL.
- **`<img src="...">`** – Embeds an image; requires `src` (image file path/URL) and `alt` (alternative text for accessibility) attributes.
- **`<ul>` / `<ol>`** – Defines unordered (bulleted) lists (`<ul>`) or ordered (numbered) lists (`<ol>`).
- **`<li>`** – Defines a list item within a `<ul>` or `<ol>`.
- **`<div>`** – A generic block‑level container used to group elements for styling or layout.
- **`<span>`** – An inline container used to style specific parts of a text string without breaking the flow.
- **`<form>`** – Defines a section for user input; commonly uses `action` (where to send data) and `method` (GET or POST) attributes.
- **`<label>`** – Provides a clickable text label for an input, improving usability and accessibility.
- **`<input type="text">`** – A single‑line text entry box.
- **`<input type="radio">`** – A radio button that allows the user to select one option from a limited set.
- **`<input type="submit">`** – A button that sends the form data to the server.
- **`<select>`** – Defines a dropdown menu; requires a `name` attribute to send the selected value to the server.
- **`<option>`** – Defines an individual choice inside a `<select>`; requires a `value` attribute (the actual data sent to the server).

#### Additional tags 

- **`<title>`** – Sets the title of the web page (shown in the browser tab). Must be placed inside `<head>`.
- **`<meta charset="UTF-8">`** – Specifies the character encoding (UTF‑8 is standard). Helps display special characters correctly.
- **`<link rel="stylesheet" href="style.css">`** – Links an external CSS file to the HTML document.
- **`<script src="script.js">`** – Embeds or links an external JavaScript file.
- **`<header>`** – Represents introductory content or a group of navigational links (e.g., logo, site title).
- **`<footer>`** – Contains footer information (copyright, contact details, etc.).
- **`<nav>`** – Defines a section with navigation links (menus).
- **`<section>`** – Groups related content together (e.g., a chapter or a themed block).
- **`<article>`** – Represents a self‑contained piece of content (e.g., a blog post, news item).
- **`<aside>`** – Contains content that is tangentially related to the main content (e.g., sidebars, pull quotes).
- **`<main>`** – Specifies the dominant content of the document (should be unique per page).
- **`<button>`** – Creates a clickable button (can be used without a form).
- **`<textarea>`** – A multi‑line text input area.
- **`<input type="checkbox">`** – A checkbox that allows multiple selections from a set of options.
- **`<input type="password">`** – A text field where characters are hidden (e.g., for passwords).
- **`<input type="email">`** – A field for email addresses; may trigger validation in modern browsers.
- **`<input type="number">`** – A field for numeric input (with up/down arrows).
- **`<fieldset>`** – Groups related form controls together, often with a `<legend>`.
- **`<legend>`** – Provides a caption for a `<fieldset>`.
- **`<br>`** – Inserts a line break (self‑closing).
- **`<hr>`** – Inserts a horizontal rule (thematic break).
- **`<strong>`** – Indicates strong importance (usually rendered as bold).
- **`<em>`** – Emphasises text (usually rendered as italic).
- **`<table>`** – Defines a table.
- **`<tr>`** – Defines a table row.
- **`<td>`** – Defines a table data cell.
- **`<th>`** – Defines a table header cell (usually bold and centred).

### CSS

**CSS (Cascading Style Sheets)** – controls the presentation and layout of the HTML elements.

**External CSS** - link to an external .css file.

`<link rel="stylesheet" href="mystyle.css">`

**Internal CSS** - use the `<style>` element in the head section.

**Inline CSS** - use the style attribute on HTML elements.

**CSS Selectors** – are used to "find" (or select) the HTML elements you want to style.


- **Element Selector**  
  CSS code: `p { ... }`  
  Explanation: Targets all `<p>` tags.

- **Class Selector**  
  CSS code: `.className { ... }`  
  Explanation: Targets all elements with `class="className"`.

- **ID Selector**  
  CSS code: `#idName { ... }`  
  Explanation: Targets the unique element with `id="idName"`.

#### Text & Fonts
- `font-family` – Sets the typeface (e.g., `Arial, sans-serif`).
- `font-size` – Defines text size (e.g., `16px`, `1.2em`, `120%`).
- `font-weight` – Controls boldness (e.g., `normal`, `bold`, `600`).
- `font-style` – Sets italic or oblique text (e.g., `normal`, `italic`).
- `color` – Sets the text colour (named, hex, rgb, hsl).
- `text-align` – Horizontal alignment: `left`, `right`, `center`, `justify`.
- `text-decoration` – Adds underline, overline, line‑through (e.g., `underline`, `none`).
- `line-height` – Space between lines of text (e.g., `1.5`, `150%`).

#### Backgrounds
- `background-color` – Solid colour behind an element.
- `background-image` – Sets an image as background (e.g., `url('image.jpg')`).
- `background-repeat` – Controls tiling: `repeat`, `repeat-x`, `repeat-y`, `no-repeat`.
- `background-position` – Places the background image (e.g., `top left`, `center`).

#### Box Model
- `width` – Sets the content width (e.g., `300px`, `50%`).
- `height` – Sets the content height.
- `padding` – Space inside the element, between content and border.
  - Shorthand: `padding: top right bottom left;` or `padding: 10px;` (all sides).
- `margin` – Space outside the element, between border and other elements.
  - Shorthand similar to padding.
- `border` – Shorthand for width, style, colour (e.g., `border: 2px solid black;`).
- `border-radius` – Rounds the corners (e.g., `5px`, `50%` for a circle).

#### Display & Visibility
- `display` – Controls layout behaviour:
  - `block` – Takes full width, starts on a new line.
  - `inline` – Takes only needed width, no line break.
  - `inline-block` – Like inline but allows width/height.
  - `none` – Removes element from layout (does not take up space).
- `visibility` – `visible` or `hidden` (hidden elements still occupy space).

#### Positioning
- `position` – Specifies the positioning method:
  - `static` – Default, follows normal flow.
  - `relative` – Offset from its normal position using `top`, `left`, etc.
  - `absolute` – Positioned relative to the nearest positioned ancestor.
  - `fixed` – Positioned relative to the viewport (stays on scroll).
- `top`, `right`, `bottom`, `left` – Offset values when position is not `static`.
- `z-index` – Stack order of overlapping elements (higher number appears on top).

#### Flexbox (Commonly examined)
- `display: flex;` – Enables flex layout on a container.
- `flex-direction` – Direction of main axis: `row`, `column`, `row-reverse`, `column-reverse`.
- `justify-content` – Aligns items along main axis (e.g., `flex-start`, `center`, `space-between`).
- `align-items` – Aligns items along cross axis (e.g., `stretch`, `center`, `flex-start`).

#### Units (know these)
- `px` – Pixels (absolute).
- `%` – Percentage of parent element (relative).
- `em` – Relative to parent’s font size.
- `rem` – Relative to root (`<html>`) font size.
- `vw` / `vh` – Viewport width / viewport height.

### PHP

**PHP** - hypertext processor; an HTML- embedded scripting language used to write web pages.

```php
<?php
$conn = mysql_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: ". mysql_connect_error());
}
echo "Connected successfully";
?>
```

Code. PHP Database Connection.


### Javascript

**JavaScript** - object-orientated (or scripting) programming language used mainly on the web; used to enhance HTML pages.

#### DOM manipulation basics

**Selecting an element by its id:**  
`let btn = document.getElementById("submitBtn");`  
Selects a specific HTML element using its unique `id`.

**Changing HTML content inside an element:**  
`document.getElementById("msg").innerHTML = "Hello!";`  
Gets or sets the HTML content inside an element.

**Getting or setting the value of an input field:**  
`let name = document.getElementById("userIn").value;`  
Gets or sets the data inside an input field.

**Adding an event listener:**  
`btn.addEventListener("click", myFunction);`  
Sets up a function to run when a specific event happens (e.g., a click).

**Inline click event:**  
`<button onclick="myFunction()"></button>`  
Triggers the function when the element is clicked.

**Pop‑up alert:**  
`alert("Task Completed");`  
Displays a message in a pop‑up dialog box.

**Console output:**  
`console.log(totalPrice);`  
Outputs data to the browser’s console (used for debugging).

#### Selecting elements

- `document.querySelector("selector")` – Returns the first element matching a CSS selector (e.g., `".class"`, `"#id"`, `"div p"`).
- `document.querySelectorAll("selector")` – Returns a `NodeList` of all elements matching the selector.
- `document.getElementsByClassName("className")` – Returns an `HTMLCollection` of elements with that class.
- `document.getElementsByTagName("tagName")` – Returns an `HTMLCollection` of elements with that tag.

#### Changing content and attributes

- `element.innerHTML` – Gets or sets the HTML inside an element.
- `element.textContent` – Gets or sets only the plain text (ignores HTML tags).
- `element.value` – Gets or sets the value of a form input (`<input>`, `<textarea>`, `<select>`).

#### Working with strings and numbers (built‑in methods)

- `.length` – Property of strings/arrays (e.g., `str.length`).
- `.toUpperCase()` / `.toLowerCase()` – Change case.
- `.substring(start, end)` – Extract part of a string.
- `.indexOf("substring")` – Find position of a substring.
- `parseInt(string)` / `parseFloat(string)` – Convert a string to a number.
- `.toString()` – Convert a number to a string.

### Array methods (common)

- `.push(item)` – Add to end.
- `.pop()` – Remove from end.
- `.length` – Number of elements.
- `.join("separator")` – Convert array to string.
- `.split("separator")` – Convert string to array.

### Other useful built‑ins

- `Math.random()` – Random number between 0 (inclusive) and 1 (exclusive).
- `Math.floor(number)` – Rounds down.
- `Math.ceil(number)` – Rounds up.
- `typeof variable` – Returns the data type (e.g., `"string"`, `"number"`, `"object"`).

Table. JS input- output.

### Test Data Types

**Normal test data** - test data that should be accepted by a program.

**Extreme test data** - test data that is on the limit of that accepted by a program.

**Erroneous (Abnormal) test data** - test data that should be rejected by a program.

### Error Types

**Syntax error** - an error in the grammar of a source program.

**Logic error** - an error in the logic of a program.

**Run- time (execution) error** - an error found in a program when it is executed; the program may halt unexpectedly.


### Programming Style

**Good Programming Style (Structured Programming)** - makes code easier to read, maintain, and debug.

<table>
<tr><th>Rule</th><th>Description</th></tr>
<tr><td>Meaningful Identifiers</td><td>Use descriptive names for variables, constants, and functions (e.g., TotalScore instead of T).</td></tr>
<tr><td>Comments (Annotation)</td><td>Include internal documentation to explain complex logic or the purpose of a block of code.</td></tr>
<tr><td>Indentation</td><td>Consistently indent code within selection (IF) and iteration (WHILE/FOR) blocks.</td></tr>
<tr><td>White Space</td><td>Use blank lines to separate logical sections of code (e.g., separating input, processing, and output).</td></tr>
</table>

Table. Good Programming Style.
