function enterData() {
    const inputBox = document.getElementById("inputText");
    inputBox.style.boxShadow = "0 0 8px 2px #ffa2deff"; 
    inputBox.focus(); 
    }

function countUppercase() {
    const text = document.getElementById("inputText").value;
    if (!text) return alert("Please enter data first!");
    let count = (text.match(/[A-Z]/g) || []).length;
    document.getElementById("resultText").value = "Number of uppercase letters: " + count;
    }

function toUppercase() {
    const text = document.getElementById("inputText").value;
    if (!text) return alert("Please enter data first!");
    document.getElementById("resultText").value = text.toUpperCase();
    }

function oneWordPerLine() {
    const text = document.getElementById("inputText").value;
    if (!text) return alert("Please enter data first!");
    document.getElementById("resultText").value = text.split(/\s+/).join("\n");
    }

function toLowercase() {
    const text = document.getElementById("inputText").value;
    if (!text) return alert("Please enter data first!");
    document.getElementById("resultText").value = text.toLowerCase();
    }

function wordCount() {
    const text = document.getElementById("inputText").value;
    if (!text) return alert("Please enter data first!");
    let words = text.trim().split(/\s+/);
    document.getElementById("resultText").value = "Word count: " + (text.trim() ? words.length : 0);
    }

function countLowercase() {
    const text = document.getElementById("inputText").value;
    if (!text) return alert("Please enter data first!");
    let count = (text.match(/[a-z]/g) || []).length;
    document.getElementById("resultText").value = "Number of lowercase letters: " + count;
    }


function printVowelsConsonants() {
        const text = document.getElementById("inputText").value;
        if (!text) return alert("Please enter data first!");
        const vowels = [...new Set((text.match(/[aeiouAEIOU]/g) || []).map(c => c.toLowerCase()))];
        const consonants = [...new Set((text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || []).map(c => c.toLowerCase()))];
    
        document.getElementById("resultText").value =
            `Vowels: ${vowels.join(" ")}\nConsonants: ${consonants.join(" ")}`;
    }