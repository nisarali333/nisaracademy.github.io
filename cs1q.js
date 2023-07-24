const quizData = [
  // Add all 100 questions here
  // { question: "Question text", options: ["Option 1", "Option 2", "Option 3", "Option 4"], answer: CorrectOptionIndex },
  {
    question: "1. What is the primary purpose of a router in a network?",
    options: [
      "To connect devices within a local area network (LAN)",
      "To connect multiple LANs and route data between them",
      "To connect devices to the internet",
      "To connect devices using wireless technology"
    ],
    answer: 1
  },
  {
    question: "2. Which networking device operates at the Data Link Layer of the OSI model?",
    options: ["Hub", "Switch", "Router", "Gateway"],
    answer: 1
  },
  {
    question: "3. What is the maximum data transfer speed of a standard Ethernet connection?",
    options: ["10 Mbps", "100 Mbps", "1 Gbps", "10 Gbps"],
    answer: 2
  },
  {
    question: "4. Which IP address range is reserved for loopback addresses?",
    options: ["192.168.0.0 - 192.168.255.255", "10.0.0.0 - 10.255.255.255", "127.0.0.0 - 127.255.255.255", "172.16.0.0 - 172.31.255.255"],
    answer: 2
  },
  {
    question: "5. What is the purpose of DHCP (Dynamic Host Configuration Protocol) in a network?",
    options: [
      "To convert domain names to IP addresses",
      "To assign IP addresses to devices automatically",
      "To secure communication between devices",
      "To route data between networks"
    ],
    answer: 1
  },
  {
    question: "6. What does the acronym DNS stand for in networking?",
    options: [
      "Domain Name Service",
      "Dynamic Network System",
      "Data Node Server",
      "Directory Naming Service"
    ],
    answer: 0
  },
  {
    question: "7. Which networking protocol is used to transfer files between systems on a network?",
    options: ["HTTP", "FTP", "SMTP", "TCP"],
    answer: 1
  },
  {
    question: "8. Which of the following is a private IP address?",
    options: ["192.168.1.1", "8.8.8.8", "172.16.0.1", "125.19.32.55"],
    answer: 0
  },
  {
    question: "9. In which layer of the OSI model does TCP (Transmission Control Protocol) operate?",
    options: [
      "Transport Layer",
      "Network Layer",
      "Data Link Layer",
      "Physical Layer"
    ],
    answer: 0
  },
  {
    question: "10. Which networking device operates at the Physical Layer of the OSI model?",
    options: ["Hub", "Switch", "Router", "Repeater"],
    answer: 3
  },
  {
    question: "11. What is the purpose of NAT (Network Address Translation) in networking?",
    options: [
      "To convert domain names to IP addresses",
      "To assign IP addresses to devices automatically",
      "To secure communication between devices",
      "To translate private IP addresses to public IP addresses"
    ],
    answer: 3
  },
  {
    question: "12. Which protocol is used to send and receive email over the internet?",
    options: ["HTTP", "FTP", "SMTP", "TCP"],
    answer: 2
  },
  {
    question: "13. Which IP address range is reserved for Automatic Private IP Addressing (APIPA)?",
    options: ["169.254.0.0 - 169.254.255.255", "192.168.0.0 - 192.168.255.255", "10.0.0.0 - 10.255.255.255", "172.16.0.0 - 172.31.255.255"],
    answer: 0
  },
  {
    question: "14. Which networking device operates at the Network Layer of the OSI model?",
    options: ["Hub", "Switch", "Router", "Repeater"],
    answer: 2
  },
  {
    question: "15. What is the purpose of a firewall in a network?",
    options: [
      "To connect devices within a local area network (LAN)",
      "To connect multiple LANs and route data between them",
      "To filter and control network traffic",
      "To provide wireless network access"
    ],
    answer: 2
  },
  {
    question: "16. Which networking device is used to extend the coverage area of a wireless network?",
    options: ["Modem", "Router", "Switch", "Access Point"],
    answer: 3
  },
  {
    question: "17. What does the acronym VPN stand for in networking?",
    options: [
      "Virtual Private Network",
      "Virtual Personal Network",
      "Very Private Network",
      "Visual Personal Network"
    ],
    answer: 0
  },
  {
    question: "18. Which of the following is a valid IPv6 address?",
    options: [
      "192.168.1.1",
      "fe80::1",
      "172.16.0.1",
      "2001:abcd:1234::5678"
    ],
    answer: 1
  },
  {
    question: "19. Which networking device operates at the Session Layer of the OSI model?",
    options: ["Hub", "Switch", "Router", "Gateway"],
    answer: 3
  },
  {
    question: "20. What is the purpose of ICMP (Internet Control Message Protocol) in networking?",
    options: [
      "To convert domain names to IP addresses",
      "To assign IP addresses to devices automatically",
      "To secure communication between devices",
      "To report errors and provide diagnostic information"
    ],
    answer: 3
  },
 {
    question: "21. What is the output of the following C code?\n\n#include <stdio.h>\nint main()\n{\n    int x = 10;\n    int y = 5;\n    if (x > 5)\n    {\n        y = x;\n    }\n    printf(\"%d\", y);\n    return 0;\n}",
    options: ["10", "5", "0", "Error"],
    answer: 0
  },
  {
    question: "22. In C language, what is the correct way to declare a pointer variable?",
    options: [
      "pointer int *p;",
      "int *p;",
      "int pointer p;",
      "p int *;"
    ],
    answer: 1
  },
  {
    question: "23. What will be the output of the following C code?\n\n#include <stdio.h>\nint main()\n{\n    int a = 5, b = 10;\n    int *p = &a;\n    int *q = &b;\n    *p = *q;\n    printf(\"%d, %d\", a, b);\n    return 0;\n}",
    options: ["10, 5", "5, 10", "10, 10", "Error"],
    answer: 2
  },
  {
    question: "24. In C, what is the correct way to define a constant using the 'const' keyword?",
    options: [
      "const int PI = 3.14;",
      "define PI 3.14",
      "constant PI = 3.14;",
      "int PI = 3.14;"
    ],
    answer: 0
  },
  {
    question: "25. What is the output of the following C code?\n\n#include <stdio.h>\nint main()\n{\n    int arr[5] = {1, 2, 3, 4, 5};\n    int *p = arr;\n    printf(\"%d\", p[3]);\n    return 0;\n}",
    options: ["1", "2", "3", "4"],
    answer: 2
  },
  {
    question: "26. In C, what is the correct way to allocate memory for an array dynamically?",
    options: [
      "int arr = (int *)malloc(5 * sizeof(int));",
      "int arr[5];",
      "int *arr = (int *)malloc(5);",
      "int arr[5] = malloc(int);"
    ],
    answer: 0
  },
  {
    question: "27. What will be the output of the following C code?\n\n#include <stdio.h>\nint main()\n{\n    int a = 5, b = 10;\n    int *p = &a;\n    int *q = &b;\n    p = q;\n    printf(\"%d\", *p);\n    return 0;\n}",
    options: ["5", "10", "Error", "Random Value"],
    answer: 1
  },
  {
    question: "28. In C, what is the correct way to access the memory address of a variable?",
    options: [
      "address(a)",
      "&a",
      "*a",
      "a"
    ],
    answer: 1
  },
  {
    question: "29. What will be the output of the following C code?\n\n#include <stdio.h>\nint main()\n{\n    int x = 0;\n    while (x < 5)\n    {\n        printf(\"%d \", x);\n        x++;\n    }\n    return 0;\n}",
    options: ["0 1 2 3 4", "1 2 3 4 5", "0 1 2 3", "1 2 3 4"],
    answer: 0
  },
  {
    question: "30. In C, what is the purpose of the 'sizeof' operator?",
    options: [
      "To find the size of a variable",
      "To convert data types",
      "To specify the data type of a variable",
      "To find the sum of elements in an array"
    ],
    answer: 0
  },
  {
    question: "31. What is the output of the following C code?\n\n#include <stdio.h>\nint main()\n{\n    int x = 5;\n    int y = x++ + ++x;\n    printf(\"%d\", y);\n    return 0;\n}",
    options: ["10", "11", "12", "15"],
    answer: 2
  },
  {
    question: "32. In C, what is the correct syntax to open a file in binary mode for writing?",
    options: [
      "fopen(\"file.txt\", \"wb\");",
      "fopen(\"file.txt\", \"w+\");",
      "fopen(\"file.txt\", \"rb\");",
      "fopen(\"file.txt\", \"r+\");"
    ],
    answer: 0
  },
  {
    question: "33. What will be the output of the following C code?\n\n#include <stdio.h>\nint main()\n{\n    int a = 5;\n    int b = a++ + ++a;\n    printf(\"%d\", b);\n    return 0;\n}",
    options: ["10", "11", "12", "15"],
    answer: 3
  },
  {
    question: "34. In C, what will be the value of 'x' after the following code execution?\n\nint x = 5;\nint *p = &x;\n*p = 10;",
    options: ["5", "10", "Address of x", "Error"],
    answer: 1
  },
  {
    question: "35. What is the output of the following C code?\n\n#include <stdio.h>\nint main()\n{\n    int x = 0;\n    do\n    {\n        printf(\"%d \", x);\n        x++;\n    } while (x < 5);\n    return 0;\n}",
    options: ["0 1 2 3 4", "1 2 3 4 5", "0 1 2 3", "1 2 3 4"],
    answer: 1
  },
  {
    question: "36. In C, what will be the value of 'x' after the following code execution?\n\nint x;\nprintf(\"%d\", x);",
    options: ["Garbage Value", "0", "Error", "Random Value"],
    answer: 0
  },
  {
    question: "37. What is the output of the following C code?\n\n#include <stdio.h>\nint main()\n{\n    int x = 2;\n    int y = 5;\n    if (x > y)\n    {\n        printf(\"%d\", x);\n    }\n    else if (x < y)\n    {\n        printf(\"%d\", y);\n    }\n    else\n    {\n        printf(\"Equal\");\n    }\n    return 0;\n}",
    options: ["2", "5", "Equal", "None of the above"],
    answer: 1
  },
  {
    question: "38. In C, what is the correct way to close a file after reading or writing?",
    options: [
      "close(file)",
      "fclose(file)",
      "file.close()",
      "fclose(&file)"
    ],
    answer: 1
  },
  {
    question: "39. What will be the output of the following C code?\n\n#include <stdio.h>\nint main()\n{\n    int a = 5, b = 10;\n    int *p = &a;\n    int *q = &b;\n    *p = 15;\n    printf(\"%d, %d\", a, b);\n    return 0;\n}",
    options: ["5, 10", "15, 10", "5, 15", "15, 15"],
    answer: 2
  },
  {
    question: "40. In C, what is the correct way to read a character from standard input?",
    options: [
      "scanf(\"%d\", &ch);",
      "getc(ch);",
      "ch = getchar();",
      "getchar(ch);"
    ],
    answer: 2
  },
{
    question: "41. In Unix/Linux, what command is used to display the current working directory?",
    options: [
      "pwd",
      "dir",
      "cd",
      "ls"
    ],
    answer: 0
  },
  {
    question: "42. Which command is used to create a new directory in Unix/Linux?",
    options: [
      "newdir",
      "md",
      "mkdir",
      "createdir"
    ],
    answer: 2
  },
  {
    question: "43. In Unix/Linux, which command is used to display the contents of a file?",
    options: [
      "view",
      "cat",
      "more",
      "ls"
    ],
    answer: 1
  },
  {
    question: "44. What does the command 'chmod 755 filename' do in Unix/Linux?",
    options: [
      "Changes the owner of the file to 'filename'",
      "Changes the permissions of the file to read, write, and execute for the owner, and read and execute for others",
      "Deletes the file 'filename'",
      "Renames the file 'filename' to '755'"
    ],
    answer: 1
  },
  {
    question: "45. In Unix/Linux, what command is used to change the owner of a file?",
    options: [
      "own",
      "usermod",
      "chown",
      "chmod"
    ],
    answer: 2
  },
  {
    question: "46. What does the command 'ls -l' do in Unix/Linux?",
    options: [
      "Lists all files and directories in the current directory",
      "Lists files and directories in long format, showing permissions, size, and modification date",
      "Lists all files and directories, including hidden ones",
      "Lists files and directories in long format, sorted by size"
    ],
    answer: 1
  },
  {
    question: "47. In Unix/Linux, what command is used to copy files or directories?",
    options: [
      "copy",
      "mv",
      "cp",
      "xcopy"
    ],
    answer: 2
  },
  {
    question: "48. What does the command 'grep' do in Unix/Linux?",
    options: [
      "Finds and replaces text in a file",
      "Searches for a pattern in a file",
      "Counts the number of lines in a file",
      "Sorts the lines in a file"
    ],
    answer: 1
  },
  {
    question: "49. In Unix/Linux, which command is used to remove a directory and its contents?",
    options: [
      "remove",
      "rmdir",
      "rm",
      "deletedir"
    ],
    answer: 2
  },
  {
    question: "50. What does the command 'ps' do in Unix/Linux?",
    options: [
      "Shows the current date and time",
      "Lists all running processes",
      "Prints the content of a file",
      "Changes the password for a user"
    ],
    answer: 1
  },
  {
    question: "51. In Unix/Linux, what command is used to change the current working directory?",
    options: [
      "cd",
      "chdir",
      "cwd",
      "dir"
    ],
    answer: 0
  },
  {
    question: "52. What does the command 'chmod +x filename' do in Unix/Linux?",
    options: [
      "Changes the permissions of the file to read and execute for the owner, group, and others",
      "Changes the permissions of the file to execute for the owner",
      "Adds execute permissions to the file for the owner, group, and others",
      "Changes the permissions of the file to write for the owner"
    ],
    answer: 2
  },
  {
    question: "53. In Unix/Linux, what command is used to create a new file?",
    options: [
      "touch",
      "newfile",
      "create",
      "mkfile"
    ],
    answer: 0
  },
  {
    question: "54. What does the command 'who' do in Unix/Linux?",
    options: [
      "Displays a list of all logged-in users",
      "Shows the current date and time",
      "Lists all files and directories in the current directory",
      "Displays the current username"
    ],
    answer: 0
  },
  {
    question: "55. In Unix/Linux, what command is used to rename a file?",
    options: [
      "rename",
      "mv",
      "ren",
      "change"
    ],
    answer: 1
  },
  {
    question: "56. What does the command 'tar' do in Unix/Linux?",
    options: [
      "Deletes a file",
      "Prints the content of a file",
      "Compresses or decompresses files",
      "Searches for a pattern in a file"
    ],
    answer: 2
  },
  {
    question: "57. In Unix/Linux, what command is used to change the permissions of a file?",
    options: [
      "chmod",
      "chown",
      "chgrp",
      "chfile"
    ],
    answer: 0
  },
  {
    question: "58. What does the command 'df' do in Unix/Linux?",
    options: [
      "Displays a list of all mounted filesystems",
      "Shows the current date and time",
      "Lists all files and directories in the current directory",
      "Displays the disk space usage of filesystems"
    ],
    answer: 3
  },
  {
    question: "59. In Unix/Linux, what command is used to print the last few lines of a file?",
    options: [
      "cat",
      "tail",
      "more",
      "head"
    ],
    answer: 1
  },
  {
    question: "60. What does the command 'kill' do in Unix/Linux?",
    options: [
      "Stops a running process",
      "Deletes a file",
      "Changes the permissions of a file",
      "Prints the content of a file"
    ],
    answer: 0
  },
{
    question: "61. What is the purpose of a GPU (Graphics Processing Unit) in a computer?",
    options: [
      "Performing arithmetic and logical operations",
      "Managing input and output devices",
      "Displaying images and videos on the screen",
      "Storing data and program instructions"
    ],
    answer: 2
  },
  {
    question: "62. Which of the following is an example of system software?",
    options: [
      "Microsoft Word",
      "Adobe Photoshop",
      "Google Chrome",
      "Operating System (OS)"
    ],
    answer: 3
  },
  {
    question: "63. What does the acronym 'URL' stand for in the context of computers?",
    options: [
      "Universal Resource Locator",
      "Uniform Resource Locator",
      "Universal Resource Link",
      "Uniform Resource Link"
    ],
    answer: 1
  },
  {
    question: "64. Which type of software allows users to perform specific tasks like word processing or spreadsheet calculations?",
    options: [
      "Operating System (OS)",
      "System Software",
      "Application Software",
      "Utility Software"
    ],
    answer: 2
  },
  {
    question: "65. Which of the following is an example of an input device?",
    options: [
      "Monitor",
      "Keyboard",
      "Printer",
      "Speakers"
    ],
    answer: 1
  },
  {
    question: "66. What is the purpose of an operating system in a computer?",
    options: [
      "To manage hardware resources and provide services for application software",
      "To perform mathematical calculations and logical operations",
      "To display images and videos on the screen",
      "To store and retrieve data and program instructions"
    ],
    answer: 0
  },
  {
    question: "67. Which type of memory is non-volatile and used to store the computer's firmware and boot-up instructions?",
    options: [
      "Random Access Memory (RAM)",
      "Read-Only Memory (ROM)",
      "Hard Disk Drive (HDD)",
      "Solid State Drive (SSD)"
    ],
    answer: 1
  },
  {
    question: "68. What is the function of an optical drive in a computer?",
    options: [
      "To display images and videos on the screen",
      "To store data and program instructions",
      "To provide a temporary working memory",
      "To read and write data to CDs, DVDs, and Blu-ray discs"
    ],
    answer: 3
  },
  {
    question: "69. What does the term 'BIOS' stand for in the context of computers?",
    options: [
      "Basic Input/Output System",
      "Binary Operating System",
      "Basic Internet Operating System",
      "Binary Input/Output System"
    ],
    answer: 0
  },
  {
    question: "70. Which component of a computer is responsible for executing instructions and performing calculations?",
    options: [
      "Graphics Processing Unit (GPU)",
      "Central Processing Unit (CPU)",
      "Motherboard",
      "Power Supply Unit (PSU)"
    ],
    answer: 1
  },
  {
    question: "71. What does the term 'GUI' stand for in the context of computers?",
    options: [
      "Graphical User Interface",
      "General User Interface",
      "Graphics Utility Interface",
      "Graphical Utility Interface"
    ],
    answer: 0
  },
  {
    question: "72. Which of the following is an example of utility software?",
    options: [
      "Microsoft Excel",
      "Adobe Illustrator",
      "Norton Antivirus",
      "Windows 10"
    ],
    answer: 2
  },
  {
    question: "73. What is the function of a sound card in a computer?",
    options: [
      "To display images and videos on the screen",
      "To provide temporary working memory",
      "To read and write data to CDs and DVDs",
      "To process and output audio signals to speakers or headphones"
    ],
    answer: 3
  },
  {
    question: "74. Which of the following is an example of an output device?",
    options: [
      "Mouse",
      "Printer",
      "Microphone",
      "Scanner"
    ],
    answer: 1
  },
  {
    question: "75. What does the term 'CPU Clock Speed' refer to?",
    options: [
      "The amount of RAM installed in a computer",
      "The maximum resolution supported by the GPU",
      "The number of CPU cores in a processor",
      "The number of cycles per second that the CPU can execute"
    ],
    answer: 3
  },
  {
    question: "76. Which of the following is a type of secondary storage in a computer?",
    options: [
      "Random Access Memory (RAM)",
      "Central Processing Unit (CPU)",
      "Solid State Drive (SSD)",
      "Monitor"
    ],
    answer: 2
  },
  {
    question: "77. What does the acronym 'HTML' stand for in the context of computers?",
    options: [
      "HyperText Markup Language",
      "Hyperlink and Text Manipulation Language",
      "High-Performance Text Management Language",
      "Hyperlink and Text Markup Language"
    ],
    answer: 0
  },
  {
    question: "78. Which of the following is an example of an application software?",
    options: [
      "Windows 10",
      "Microsoft Word",
      "Adobe Photoshop",
      "BIOS"
    ],
    answer: 2
  },
  {
    question: "79. What is the purpose of the 'Ctrl + Z' keyboard shortcut?",
    options: [
      "To undo the last action",
      "To copy selected text",
      "To save the current document",
      "To paste copied text"
    ],
    answer: 0
  },
  {
    question: "80. Which of the following is an example of a programming language?",
    options: [
      "Microsoft Excel",
      "Adobe Illustrator",
      "Java",
      "Google Chrome"
    ],
    answer: 2
  },
{
    question: "81. What is Visual Basic?",
    options: [
      "A scripting language",
      "A markup language",
      "An object-oriented programming language",
      "An event-driven programming language"
    ],
    answer: 3
  },
  {
    question: "82. Which IDE (Integrated Development Environment) is commonly used for Visual Basic programming?",
    options: [
      "Eclipse",
      "Visual Studio",
      "NetBeans",
      "Xcode"
    ],
    answer: 1
  },
  {
    question: "83. How do you declare a variable in Visual Basic?",
    options: [
      "var variable_name",
      "variable variable_name",
      "dim variable_name",
      "int variable_name"
    ],
    answer: 2
  },
  {
    question: "84. Which keyword is used to create a loop in Visual Basic?",
    options: [
      "do",
      "for",
      "while",
      "loop"
    ],
    answer: 1
  },
  {
    question: "85. Which event is triggered when a form is loaded in Visual Basic?",
    options: [
      "Click",
      "Load",
      "Initialize",
      "Start"
    ],
    answer: 1
  },
  {
    question: "86. What is the extension of a Visual Basic project file?",
    options: [
      ".vb",
      ".vba",
      ".vbproj",
      ".vbp"
    ],
    answer: 2
  },
  {
    question: "87. Which control is used to display a message to the user in Visual Basic?",
    options: [
      "Label",
      "TextBox",
      "Button",
      "MessageBox"
    ],
    answer: 3
  },
  {
    question: "88. Which keyword is used to define a procedure in Visual Basic?",
    options: [
      "sub",
      "function",
      "proc",
      "method"
    ],
    answer: 0
  },
  {
    question: "89. Which property is used to set the text displayed on a button control in Visual Basic?",
    options: [
      "Value",
      "Text",
      "Caption",
      "Label"
    ],
    answer: 2
  },
  {
    question: "90. What is the purpose of 'Option Explicit' in Visual Basic?",
    options: [
      "It enforces explicit declaration of variables",
      "It enables debugging mode",
      "It displays error messages",
      "It allows implicit conversion of data types"
    ],
    answer: 0
  },
  {
    question: "91. Which control is used to allow users to select from a list of options in Visual Basic?",
    options: [
      "ComboBox",
      "RadioButton",
      "CheckBox",
      "ListBox"
    ],
    answer: 0
  },
  {
    question: "92. Which event is triggered when a user clicks on a control in Visual Basic?",
    options: [
      "Click",
      "Load",
      "MouseClick",
      "Initialize"
    ],
    answer: 0
  },
  {
    question: "93. What is the purpose of 'Me' keyword in Visual Basic?",
    options: [
      "To create a new instance of a class",
      "To refer to the current instance of a class",
      "To close the application",
      "To display a message box"
    ],
    answer: 1
  },
  {
    question: "94. How do you comment a single line of code in Visual Basic?",
    options: [
      "// This is a comment",
      "# This is a comment",
      "' This is a comment",
      "/* This is a comment */"
    ],
    answer: 2
  },
  {
    question: "95. Which keyword is used to exit a loop in Visual Basic?",
    options: [
      "continue",
      "exit",
      "break",
      "finish"
    ],
    answer: 1
  },
  {
    question: "96. Which control is used to display a pop-up calendar for date selection in Visual Basic?",
    options: [
      "DateTimePicker",
      "DateSelector",
      "Calendar",
      "DatePicker"
    ],
    answer: 0
  },
  {
    question: "97. What does the 'Handles' keyword do in Visual Basic?",
    options: [
      "It indicates that a variable is being handled",
      "It specifies the data type of a variable",
      "It indicates that a control event is being handled",
      "It defines a constant value"
    ],
    answer: 2
  },
  {
    question: "98. Which method is used to display a message to the user in Visual Basic?",
    options: [
      "MsgBox()",
      "Display()",
      "Print()",
      "ShowMessage()"
    ],
    answer: 0
  },
  {
    question: "99. What is the purpose of 'Try Catch' block in Visual Basic?",
    options: [
      "To handle errors and exceptions",
      "To perform a mathematical calculation",
      "To define a loop",
      "To display a message to the user"
    ],
    answer: 0
  },
  {
    question: "100. Which control is used to display a list of items that can be scrolled in Visual Basic?",
    options: [
      "ComboBox",
      "ListBox",
      "RadioButton",
      "CheckBox"
    ],
    answer: 1
  },
];
