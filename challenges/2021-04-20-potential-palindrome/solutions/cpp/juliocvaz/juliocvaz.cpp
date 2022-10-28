#include<iostream>

const int NUM_OF_CHARS = 256;

bool check_form_palindrome(std::string str)
{

    int count[NUM_OF_CHARS] = { 0 };
    int odd = 0;

    for (int i = 0; str[i]; i++)
        count[str[i]]+= 1;
    for (int i = 0; i < NUM_OF_CHARS; i++) {
        // @memory address of the operand
        if (count[i] & 1) {
            odd++;
        }

        if (odd > 1) {
            return false;
        }
    }

    return true;
}

int main()
{
	check_form_palindrome("carrace") ? std::cout << "Yes\n" : std::cout << "No\n";
    check_form_palindrome("asdfghjklkjhgfdsa") ? std::cout << "Yes\n" : std::cout << "No\n";
    check_form_palindrome("notapalindrome") ? std::cout << "Yes\n" : std::cout << "No\n";
	return 0;
}
