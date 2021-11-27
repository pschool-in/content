# Passage

The basic representation is multiline text. It supports headings and for that we need to start with 'hash' symbol. Each line will be considered as a paragraph. It also supports list.

```
`# heading 1
paragraph 1
paragraph 2
# heading 2
1. list item 1
2. list item 2
paragraph3`
```

A passage is made up of a list of content. It can be paragraph, list, title, image, video etc.

So it can also be represented as a list (array) but it is verbose.

```
[
    '# heading 1',
'paragraph 1',
'paragraph 2',
'# heading 2',
'1. list item 1',
'2. list item 2',
'paragraph3'
]
```

Each item in the array need not have to be a string. It can also be an object of particular style.

## html

```
{
    type: 'html',
    text: 'html style'
}
```

Commonly used styles are bold (`<b>...</b>`), italic (`<i>...</i>`) and line break (`<br>`)

## hilight

We may want to hilight a short passage.

```
{
    type: 'hilight',
    text: 'sentence to hilight'
}
```

## image

```
{
    type: 'image',
    src: 'image location'
}
```

## sitewords

```
{
    type: 'sitewords',
    src: 'has, have, had, having, will have',
}
```

## poem

```
{
    type: 'poem',
    src: 'poem text'
}
```

## small

```
{
    type: 'small',
    src: 'small notes'
}
```
