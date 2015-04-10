simpulsnip
==========
### simpulsnip a simple way to manage/store commonly used bits of text/html/code in a JSON file and clean display of them, with easy auto select for copy/pasting.

Great for using as an asset manager in projects, or any environment where frequently used bits of data/HTML are copy pasted by multiple team members.

###### simpulsnip allows you to update your data/snippets in one place and you're sure everyone is copy-pasting the latest data.

#### How to Use
At the basic level it will work "out of the box" by just manually editing the data.json file. You can of course hook this .json file up to any system you want to spit out elements/data from some kind of system (PHP/Node etc).
If you want to add extra elements/fields, just add them in the data.json file and then add their values in the main.js file also.

Eg:
To create a new field for each/every item add it to the data.json:
Change this:
```
{"NAME":"My Blue","HTML":"#3598CB"}
```
To this:
```
{"NAME":"My Blue","MYNEWTHING":"stuff goes here",HTML":"#3598CB"}
```

Then in main.js after this line:
```
'<div class="element">'
```
where it's relevant add this kind of line:
```
+ '<div>'+elementData.MYNEWTHING+'</div>'
```


* By Alex Wigmore
* @MrWigster
* http://alex-wigmore.co.uk/simpulsnip