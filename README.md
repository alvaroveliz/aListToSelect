#jQuery aListToSelect

A jQuery plugin that converts a list into a choice menu

##How to use

Choose an ordered / unordered list and a select element.

```html
<ul id="list">
  <li><a href="#">Home</a></li>
  <li><a href="#">About us</a></li>
  <li><a href="#">Contact</a></li>
</ul>

<select id="menu"></select>
```

```javascript
$('ul#list').aListToSelect({ 
    'target' : 'select#menu',
    'selectedClass' : 'selected',
    'addButton' : true
});
```

##Options

###target

A select element

###selectedClass

A class for selected element. This will be a "selected" option 

###addButton

An option for add a helper button 

## Dependencies
 - jQuery