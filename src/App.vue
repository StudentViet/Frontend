<template>
        <div id="app">
                <router-view></router-view>
        </div>
</template>

<script>
export default {

}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

body {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    line-height: 1.334;
}

h5 {
    font-size: 1.8rem;
}

a {
    text-decoration: none;
}

button {
    outline: none;
}

/* INPUT */

.group {
    position: relative;
    margin-top: 45px;
}

.group input {
    font-size: 16px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border:none;
    border-bottom: 1px solid #757575;
}

.group input:focus {
    outline: none;
}

.group label {
    color: #999;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
}

.group input:focus ~ label, input:valid ~ label {
    top:-20px;
    font-size:14px;
    color:#2f94c5;
}

.bar {
    position:relative;
    display:block;
    width:100%;
}

.bar:before, .bar:after {
    content:'';
    height:2px;
    width:0;
    bottom:1px;
    position:absolute;
    background:#2f94c5;
    transition:0.2s ease all;
    -moz-transition:0.2s ease all;
    -webkit-transition:0.2s ease all;
}

.bar:before {
    left:50%;
}

.bar:after {
    right:50%;
}

.group input:focus ~ .bar:before, .group input:focus ~ .bar:after {
    width:50%;
}

.group .highlight {
    position: absolute;
    height: 60%;
    width: 100%;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
}

.group input:focus ~ .highlight {
    -webkit-animation: inputHighlighter 0.3s ease;
    -moz-animation: inputHighlighter 0.3s ease;
    animation: inputHighlighter 0.3s ease;
}

@-webkit-keyframes inputHighlighter {
	from { background:#2f94c5; }
    to 	{ width:0; background:transparent; }
}

@-moz-keyframes inputHighlighter {
	from { background:#2f94c5; }
    to 	{ width:0; background:transparent; }
}

@keyframes inputHighlighter {
	from { background:#2f94c5; }
    to 	{ width:0; background:transparent; }
}

.font-bold {
    font-weight: 600 !important;
}

.colorPrimary {
    color: #2f94c5;
}

.colorGray {
    color: rgba(0, 0, 0, 0.54);
}

.btn-primary {
    width: 100%;
    border:none;
    background: rgb(30, 136, 229);
    padding: 18px;
    color: white;
    border-radius: 5px;
    border-bottom: none;
    transition: 0.2s;
}

.text-center {
    margin: 10px;
    text-align: center !important;
}

.text-left {
    margin: 5px;
    float:left;
}

.text-right {
    margin: 5px;
    float:right;
}

</style>
