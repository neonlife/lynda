package org.example.java8;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;
import java.util.Set;

public class Main {

	public static void main(String[] args) {

		DateTimeFormatter dtf = DateTimeFormatter.ofLocalizedDateTime(FormatStyle.SHORT);
		LocalDateTime dt = LocalDateTime.now();
		System.out.println(dtf.format(dt));

		// Method 1
		ZonedDateTime gmt = ZonedDateTime.now(ZoneId.of("GMT+0"));
		System.out.println(dtf.format(gmt));

		// Method 2
		ZonedDateTime nyt = ZonedDateTime.now(ZoneId.of("America/New_York"));
		System.out.println(dtf.format(nyt));

		Set<String> zones = ZoneId.getAvailableZoneIds();
		zones.stream().filter(s -> s.contains("London"))
				.forEach(z -> System.out.println(z));

	}

}
