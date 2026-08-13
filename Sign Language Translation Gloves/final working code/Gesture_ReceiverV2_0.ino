int flex1 = 34;
int flex2 = 32;
int flex3 = 36;
int flex5 = 35;
unsigned long lastGestureTime = 0;
const int gestureDelay = 1500;

void setup() {

  Serial.begin(115200);
  Serial2.begin(9600, SERIAL_8N1, 16, 17);

}

void loop() {

  int value1 = analogRead(flex1);
  int value2 = analogRead(flex2);
  int value3 = analogRead(flex3);
  int value5 = analogRead(flex5);
  if (millis() - lastGestureTime < gestureDelay) {
  return;
}
  // 1 + 2 + 3 = THANK YOU
  if (value1 < 15 && value2 < 150 && value3 < 150) {

    Serial2.println("Dhanyavaadhagalu");
    lastGestureTime = millis();

  }

  // 1 + 2 + 5 = GOODBYE
  else if (value1 < 15 && value2 < 150 && value5 < 100) {

    Serial2.println("Vidhaayaa");
    lastGestureTime = millis();

  }

  // 1 + 3 + 5 = PLEASE COME HERE
  else if (value1 < 15 && value3 < 150 && value5 < 100) {

    Serial2.println("Dhayaaavittu Eega Banni");
    lastGestureTime = millis();

  }

  // 2 + 3 + 5 = WASHROOM
  else if (value2 < 150 && value3 < 150 && value5 < 100) {

    Serial2.println("Dhayaaavittu Nannanna Showchaalayakke Karedukondu Hoagee");
    lastGestureTime = millis();

  }

  // 1 + 2 = DOCTOR
  else if (value1 < 15 && value2 < 150) {

    Serial2.println("Dhayaaavittu Vaidhyaranna Karesi");
    lastGestureTime = millis();

  }

  // 1 + 3 = YES
  else if (value1 < 15 && value3 < 150) {

    Serial2.println("Haaudhu");
    lastGestureTime = millis();

  }

  // 1 + 5 = HELLO
  else if (value1 < 15 && value5 < 100) {

    Serial2.println("Namaaskaara");
    lastGestureTime = millis();

  }

  // 2 + 5 = NO
  else if (value2 < 150 && value5 < 100) {

    Serial2.println("Beeda");
    lastGestureTime = millis();

  }

  // 2 + 3 = HUNGRY
  else if (value2 < 150 && value3 < 150) {

    Serial2.println("Nanaage Hasivu Aagidhey");
    lastGestureTime = millis();

  }

  // 3 + 5 = THIRSTY
  else if (value3 < 150 && value5 < 100) {

    Serial2.println("Nanaage Dhaahaa Aagidhey");
    lastGestureTime = millis();

  }

  // 1 = HELP
  else if (value1 < 15) {

    Serial2.println("Nanaage Sahaayaa Beeku");
    lastGestureTime = millis();

  }

  // 2 = WATER
  else if (value2 < 150) {

    Serial2.println("Nanaage Neeru Beeku");
    lastGestureTime = millis();

  }

  // 3 = FOOD
  else if (value3 < 150) {

    Serial2.println("Nanaage Ootaa Beeku");
    lastGestureTime = millis();

  }

  // 5 = PAIN
  else if (value5 < 100) {

    Serial2.println("Nanaage Noovu Aagide");
    lastGestureTime = millis();

  }

  

}