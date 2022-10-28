#include<iostream>
#include<stdio.h>
#include<vector>
#include<string>

std::vector<char> letters;
std::string palindrome;

void vectorToString(std::vector<char> letters) {
    for(char letter : letters) {
        palindrome += letter;
    }
}

void invertLetters(std::string word) {
    for(int i = 0; i < word.length(); i++) {
        if (word[i] != ' ') {
            letters.insert(letters.begin(), word[i]);
        }
    }
}

void printMessage(bool checker){
    std::cout << "this word is palindrome? " << std::boolalpha << checker << std::endl;
}

int main() {
    std::cout << "put the palindrome word" << std::endl;

    std::string word;
    char variant;

    std::cin >> word;

    invertLetters(word);

    vectorToString(letters);

    printMessage(palindrome == word);
}