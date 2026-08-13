int flex1 = 34;
int flex2 = 32;
int flex3 = 36;
int flex4 = 39;
int flex5 = 35;

void setup() {

  Serial.begin(115200);
  Serial2.begin(9600, SERIAL_8N1, 16, 17);

}

void loop() {

  int value1 = analogRead(flex1);
  int value2 = analogRead(flex2);
  int value3 = analogRead(flex3);
  int value4 = analogRead(flex4);
  int value5 = analogRead(flex5);

  Serial.print("Sensor 1: ");
  Serial.print(value1);

  Serial.print(" | Sensor 2: ");
  Serial.print(value2);

  Serial.print(" | Sensor 3: ");
  Serial.print(value3);

  Serial.print(" | Sensor 4: ");
  Serial.print(value4);

  Serial.print(" | Sensor 5: ");
  Serial.println(value5);

  delay(1000);
}