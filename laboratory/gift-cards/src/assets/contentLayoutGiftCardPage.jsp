<%@ page trimDirectiveWhitespaces="true" %>
<%@ taglib prefix="template" tagdir="/WEB-INF/tags/responsive/template" %>
<%@ taglib prefix="cms" uri="http://hybris.com/tld/cmstags" %>

<template:page pageTitle="${pageTitle}">

	<div class="container__full">
		<div class="row">
			<cms:pageSlot position="GiftCardSlot" var="feature" element="div">
				<cms:component component="${feature}"/>
			</cms:pageSlot>

			<cms:pageSlot position="GiftCardProductsSlot" var="feature" element="div">
				<cms:component component="${feature}"/>
			</cms:pageSlot>
		</div>
	</div>
</template:page>
